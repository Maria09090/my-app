const db = require("./db");
const bcrypt = require('bcrypt');
const jws = require('jsonwebtoken');
require(`dotenv`);

const register = (req, res) => {
    const query = "SELECT * FROM users WHERE username = ?";

    db.query(query, [req.body.username], (err, data) => {
        if (err) return res.status(500).json({ error: 'Internal server Error' });
        if (data.length) return res.status(409).json("User already exists!");
            
        const salt = bcrypt.genSaltSync(10);
        const hash = bcrypt.hashSync(req.body.password, salt);

        const query = "INSERT INTO users(`username`,`password`) VALUES (?)";
        const values = [req.body.username, hash];

        db.query(query, [values], (err, data) => {
            if (err) return res.status(500).json({ error: 'Internal server error' });
            return res.status(201).json({ massage: "User has been created."});
        });
    });
};


const login = (req, res) => {
    const query = "SELECT * FROM user WHERE username = ?";

    db.query(query, [req.body.username], (err, data) => {
        if (err) return res.json(err);

        if (data.length == 0) return res.status(404).json("User not found");

        const token = jwt.sign({ id: data[0].id }, process.env.JWT_SELECT, {expiresIn: "1h"});

        const { password, ...other } = data[0];

        res.cookie("access_token", token, {
            httpOnly: true,
        })
        .status(200)
        .json(other);
    });
};

const logout = (req, res) => {
    res
       .clearCookie("access_token", {
        sameSite: "none",
        secure: true,
       })
       .status(200)
       .json("User has been logged out.");
};

module.exports = { register, login, logout}; 