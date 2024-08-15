const express = require('express');
const mysql = require('mysql');
const cors = require('cors');

const app = express();
app.use(express.json());
app.use(cors());

const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "mysql",
    database: "contact"
});

db.connect((err) => {
    if (err) {
        console.error('Error connecting to the database:', err);
        return;
    }
    console.log('Connected to the database');
});

app.post('/contact', (req, res) => {
    const sql = "INSERT INTO cform (full_name, phone_num, email, message) VALUES (?, ?, ?, ?)";
    const values = [
        req.body.name,
        req.body.phone,
        req.body.email,
        req.body.message
    ];
    db.query(sql, values, (err, data) => {
        if (err) {
            console.error('Database error:', err);
            return res.status(500).json("Error saving data");
        }
        return res.status(200).json(data);
    });
});

const PORT = 8081;
app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}...`);
});
