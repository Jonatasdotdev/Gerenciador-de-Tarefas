// src/models/User.js
const db = require('../db');

const User = {
    create: (email, password) => {
        return new Promise((resolve, reject) => {
            const query = 'INSERT INTO users (email, password) VALUES (?, ?)';
            db.query(query, [email, password], (err, results) => {
                if (err) {
                    return reject(err);
                }
                resolve(results.insertId);
            });
        });
    },

    findByEmail: (email) => {
        return new Promise((resolve, reject) => {
            const query = 'SELECT * FROM users WHERE email = ?';
            db.query(query, [email], (err, results) => {
                if (err) {
                    return reject(err);
                }
                resolve(results[0]);
            });
        });
    },
};

module.exports = User;
