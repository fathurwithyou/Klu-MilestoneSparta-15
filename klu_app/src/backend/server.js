const express = require("express");
const { google } = require("googleapis");
const bodyParser = require("body-parser");
const path = require("path");
const fs = require("fs");
const cors = require("cors");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");

const app = express();
app.use(cors());
app.use(bodyParser.json());

const SPREADSHEET_ID = fs.readFileSync("sheet_id.txt", "utf8").trim();
const RANGE = "user!A:F";

const keysPath = path.join(__dirname, "../../klu-milestone-51e07c135778.json");

const auth = new google.auth.GoogleAuth({
  keyFile: keysPath,
  scopes: ["https://www.googleapis.com/auth/spreadsheets"],
});

const sheets = google.sheets({ version: "v4", auth });

const JWT_SECRET = fs.readFileSync("key.txt", "utf8").trim();

app.post("/check-availability", async (req, res) => {
  const { username, email } = req.body;

  try {
    const response = await sheets.spreadsheets.values.get({
      spreadsheetId: SPREADSHEET_ID,
      range: RANGE,
    });

    const rows = response.data.values || [];

    const isUsernameUsed = rows.some((row) => row[1] === username);
    const isEmailUsed = rows.some((row) => row[5] === email);

    if (isUsernameUsed || isEmailUsed) {
      return res.status(400).json({ message: "Username or Email already in use" });
    }

    return res.status(200).json({ message: "Available" });
  } catch (error) {
    return res.status(500).json({ message: "Error checking availability" });
  }
});

app.post("/submit-form", async (req, res) => {
  const { name, dob, username, email, password } = req.body;
  const ts = new Date().toISOString();

  try {
    const hashedPassword = await bcrypt.hash(password, 10);

    await sheets.spreadsheets.values.append({
      spreadsheetId: SPREADSHEET_ID,
      range: RANGE,
      valueInputOption: "RAW",
      resource: {
        values: [[ts, username, hashedPassword, name, dob, email]],
      },
    });

    res.status(200).json({ message: "Form submitted successfully" });
  } catch (error) {
    console.error("Error writing to Database:", error);
    res.status(500).json({ message: "Error submitting form" });
  }
});

app.post("/login", async (req, res) => {
  const { username, password } = req.body;

  const findUserByUsernameOrEmail = async (usernameOrEmail) => {
    try {
      const response = await sheets.spreadsheets.values.get({
        spreadsheetId: SPREADSHEET_ID,
        range: RANGE,
      });

      const rows = response.data.values || [];
      return rows.find((row) => row[1] === usernameOrEmail || row[5] === usernameOrEmail);
    } catch (error) {
      console.error("Error finding user:", error);
      return null;
    }
  };

  try {
    const user = await findUserByUsernameOrEmail(username);

    if (!user || !(await bcrypt.compare(password, user[2]))) {
      return res.status(401).json({ message: "Invalid username or password" });
    }
    const token = jwt.sign({ username: user[1], name: user[3], email: user[5] }, JWT_SECRET, { expiresIn: "7d" });

    res.status(200).json({ token, user: { username: user[1], name: user[3], email: user[5] } });
  } catch (error) {
    console.error("Login error:", error);
    res.status(500).json({ message: "Error logging in" });
  }
});

const authenticate = (req, res, next) => {
  const token = req.headers.authorization?.split(" ")[1];
  if (!token) {
    return res.status(401).json({ message: "Access denied" });
  }

  try {
    const decoded = jwt.verify(token, JWT_SECRET);
    req.user = decoded;
    next();
  } catch (error) {
    res.status(403).json({ message: "Invalid token" });
  }
};

app.get("/profile", authenticate, async (req, res) => {
  const { username } = req.user;

  try {
    const response = await sheets.spreadsheets.values.get({
      spreadsheetId: SPREADSHEET_ID,
      range: RANGE,
    });

    const rows = response.data.values || [];
    const user = rows.find((row) => row[1] === username);

    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    const userProfile = {
      username: user[1],
      name: user[3],
      dob: user[4],
      email: user[5],
    };

    res.status(200).json({ user: userProfile });
  } catch (error) {
    console.error("Error fetching profile:", error);
    res.status(500).json({ message: "Error fetching profile" });
  }
});

app.post("/update-profile", authenticate, async (req, res) => {
  const oldUsername = req.user.username;
  const { name, dob, email, username } = req.body;

  try {
    const response = await sheets.spreadsheets.values.get({
      spreadsheetId: SPREADSHEET_ID,
      range: RANGE,
    });

    const rows = response.data.values || [];
    const userIndex = rows.findIndex((row) => row[1] === oldUsername);
    console.log(oldUsername, userIndex);
    if (userIndex === -1) {
      return res.status(404).json({ message: "User not found" });
    }

    const updatedRow = [rows[userIndex][0], username, rows[userIndex][2], name, dob, email];
    rows[userIndex] = updatedRow;

    await sheets.spreadsheets.values.update({
      spreadsheetId: SPREADSHEET_ID,
      range: `user!A${userIndex + 1}:F${userIndex + 1}`,
      valueInputOption: "RAW",
      resource: {
        values: [updatedRow],
      },
    });

    res.status(200).json({ user: { username, name, dob, email } });
  } catch (error) {
    console.error("Error updating profile:", error);
    res.status(500).json({ message: "Error updating profile" });
  }
});

app.get("/home", authenticate, (req, res) => {
  res.json({ message: `Welcome, ${req.user.username}!` });
});

app.listen(8000, () => console.log("Server running on port 8000"));
