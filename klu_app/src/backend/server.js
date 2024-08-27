const express = require("express");
const { google } = require("googleapis");
const bodyParser = require("body-parser");
const path = require("path");
const fs = require("fs");
const cors = require('cors'); 

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

app.post('/submit-form', async (req, res) => {
  const { name, dob, username, email, password } = req.body;
  const ts = new Date().toISOString();
  try {
    await sheets.spreadsheets.values.append({
      spreadsheetId: SPREADSHEET_ID,
      range: RANGE,
      valueInputOption: 'RAW',
      resource: {
        values: [[ts, username, password, name, dob, email]],
      },
    });

    res.status(200).json({ message: 'Form submitted successfully' });
  } catch (error) {
    console.error('Error writing to Google Sheet:', error);
    res.status(500).json({ message: 'Error submitting form' });
  }
});

app.listen(8000, () => console.log("Server running on port 8000"));