const express = require('express'); 
const mysql = require('body-parser');
const bcrypt = require('bcrypt');
const Websocket = require('ws');
const cors = require('cors');  

const app = express();
const port = 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());

const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'Kappa123!',
    database: 'react',
    insecureAuth: true,

});

const createTableQuery = `
CREATE TABLE IF NOT EXISTS users (
    id INT AUTO_INCREMENT PRIMARY KEY,
    username VARCHAR(255) NOT NULL,
    password VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL
);
`;

db.query(createTableQuery, (err) => {
    if (err) {
        console.error('Error creating user table: ', err);
    } else {
        console.error('User table created or already exists');
    }
});

app.post('/register', async (req, res) => {
    const { username, password, email } = req.body;

    try {
        const hashedPassword = await bcrypt.hash(password, 10);

        const query = `INSERT INTO users (username, password, email) VALUES (?, ?, ?)`;
        db.query(query, [username, hashedPassword, email], (err) => {
            if (err) {
                console.error('Error registering user: ', err);
                res.status(500).json({ error: 'Internal server error' });
            } else {
                res.status(200).json({ message: 'User registered' });
            }
        });
    } catch (error) {
        console.error('Error hashing password: ', error);
        res.status(500).json({ error: 'Internal server error' });
    }
});

app.post('/login', async (req, res) => {
    const { username, password } = req.body;

    try {
        const query = 'SELECT * FROM user WHERE username = ?';
        db.query(query, [username], async (err, results) => {
            if (err) {
                console.error('Error executing query: ', err);
                res.status(500).json({ success: false, error: 'Internal server error' });             
            } else {
                if (results.length > 0) {
                    const user = results[0];
                    const passwordMatch = await bcrypt.compare(password, user.password);

                    if (passwordMatch) {
                        res.status(200).json({ success: true, user});
                    } else {
                        res.status(401).json({ success: false, error: 'Invalid password' });
                    }
                } else {
                    res.status(401).json({ success: false, error: 'User not found' });
                }
            }
        });
    } catch (error) {
        console.error('Error during login:', error);
        res.status(500).json({ success: false, error: 'Internal server error' });
    }
});

const WSS = new Websocket.Server({ server: app });

WSS.on('connection', (ws) => {
    WSS.on('massage', (message) => {
        console.log('received: %s:', message);
    });

    ws.send('something');
});

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});


