from flask import Flask, render_template, request, redirect, url_for, session, flash
from flask_mysqldb import MySQL
import MySQLdb.cursors
import bcrypt
import os

app = Flask(__name__)
app.secret_key = 'your_secret_key'

# Konfigurasi MySQL
app.config['MYSQL_HOST'] = 'localhost'
app.config['MYSQL_USER'] = 'root'
app.config['MYSQL_PASSWORD'] = ''
app.config['MYSQL_DB'] = 'klu_app'

mysql = MySQL(app)

@app.route('/')
@app.route('/landing')
def landing():
    return render_template('landing.html')

@app.route('/home')
def home():
    if 'username' in session:
        return render_template('home.html', username=session['username'])
    else:
        flash('You are not logged in', 'danger')
        return redirect(url_for('login'))

@app.route('/login', methods=['GET', 'POST'])
def login():
    if request.method == "POST":
        username = request.form['username']
        password = request.form['password'].encode('utf-8')
        curl = mysql.connection.cursor(MySQLdb.cursors.DictCursor)
        curl.execute("SELECT * FROM users WHERE username=%s", (username,))
        user = curl.fetchone()
        curl.close()

        if user is not None and len(user) > 0:
            stored_password_hash = user['password'].encode('utf-8') if isinstance(user['password'], str) else user['password']
            if bcrypt.checkpw(password, stored_password_hash):
                session['username'] = user['username']
                session['name'] = user['name']
                session['email'] = user['email']
                flash('You are now logged in', 'success')
                return redirect(url_for('home'))
            else:
                flash('Invalid login credentials', 'danger')
        else:
            flash('User not found', 'danger')
    return render_template('login.html')

@app.route('/register', methods=['GET', 'POST'])
def register():
    if request.method == 'POST':
        name = request.form['name']
        email = request.form['email']
        date_of_birth = request.form['date_of_birth']
        reason_of_registering = request.form['reason_of_registering']
        username = request.form['username']
        password = request.form['password'].encode('utf-8')
        confirm_password = request.form['confirm_password'].encode('utf-8')

        if password != confirm_password:
            flash('Passwords do not match', 'danger')
            return redirect(url_for('register'))

        hashed_password = bcrypt.hashpw(password, bcrypt.gensalt())

        curl = mysql.connection.cursor(MySQLdb.cursors.DictCursor)
        curl.execute("INSERT INTO users (name, email, date_of_birth, reason_of_registering, username, password) VALUES (%s, %s, %s, %s, %s, %s)", (name, email, date_of_birth, reason_of_registering, username, hashed_password))
        mysql.connection.commit()
        curl.close()

        flash('You are now registered and can log in', 'success')
        return redirect(url_for('home'))
    return render_template('register.html')

if __name__ == '__main__':
    app.run(debug=True)