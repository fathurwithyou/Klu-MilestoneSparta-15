from flask import Flask, render_template, request, redirect, url_for, session, flash
from flask_mysqldb import MySQL, MySQLdb
from datetime import datetime
import bcrypt
import werkzeug

app = Flask(__name__)
app.secret_key = 'userklu'

app.config['MYSQL_HOST'] = 'localhost'
app.config['MYSQL_USER'] = 'root'
app.config['MYSQL_PASSWORD'] = ''
app.config['MYSQL_DB'] = 'klu_app'
app.config['MYSQL_CURSORCLASS'] = 'DictCursor'
mysql = MySQL(app)

@app.route('/')
@app.route('/home')
def home():
    if 'name' in session:
        return render_template('home.html')
    else:
        flash('You are not logged in', 'danger')
        return redirect(url_for('login'))

@app.route('/login', methods=['GET', 'POST'])
def login():
    if request.method == "POST":
        email = request.form['email']
        password = request.form['password'].encode('utf-8')
        curl = mysql.connection.cursor(MySQLdb.cursors.DictCursor)
        curl.execute("SELECT * FROM users WHERE email=%s", (email,))
        user = curl.fetchone()
        curl.close()

        if user is not None and len(user) > 0:
            # bcrypt.checkpw untuk memverifikasi kata sandi
            stored_password_hash = user['password'].encode('utf-8') if isinstance(user['password'], str) else user['password']
            if bcrypt.checkpw(password, stored_password_hash):
                session['name'] = user['name']
                session['email'] = user['email']
                flash('You are now logged in', 'success')
                return redirect(url_for('home'))
            else:
                flash('Invalid password', 'danger')
                return redirect(url_for('login'))
        else:
            flash('Invalid email', 'danger')
            return redirect(url_for('login'))
    else:
        return render_template('login.html')

@app.route('/register', methods=['GET', 'POST'])
def register():
    if request.method == "POST":
        name = request.form['name']
        email = request.form['email']
        date_of_birth_str = request.form['date_of_birth']
        # Konversi string ke objek date
        date_of_birth = datetime.strptime(date_of_birth_str, '%Y-%m-%d').date()
        reason_of_registering = request.form['reason_of_registering']
        created_at = datetime.now()
        username = request.form['username']
        password = request.form['password'].encode('utf-8')
        hash_password = bcrypt.hashpw(password, bcrypt.gensalt()).decode('utf-8')
        
        curl = mysql.connection.cursor(MySQLdb.cursors.DictCursor)
        curl.execute("INSERT INTO users (name, email, date_of_birth, username, password) VALUES (%s, %s, %s, %s, %s)", (name, email, date_of_birth, username, hash_password))
        mysql.connection.commit()
        curl.close()
        
        flash('You are now registered and can log in', 'success')
        return redirect(url_for('login'))
    return render_template('register.html')

# @app.route('/about')
# def about():
#     if 'email' in session:
#         return render_template('about.html')
#     else:
#         return redirect(url_for('home'))
    
@app.route('/logout')
def logout():
    session.clear()
    flash('You have been logged out', 'success')
    return redirect(url_for('login'))

if __name__ == '__main__':
    app.run(debug=True)