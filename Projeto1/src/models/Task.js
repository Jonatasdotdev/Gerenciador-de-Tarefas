// src/models/Task.js
const db = require('../db');

const Task = {
    create: (userId, title, description) => {
        return new Promise((resolve, reject) => {
            const query = 'INSERT INTO tasks (user_id, title, description, completed) VALUES (?, ?, ?, ?)';
            db.query(query, [userId, title, description, false], (err, results) => {
                if (err) {
                    return reject(err);
                }
                resolve(results.insertId);
            });
        });
    },

    findAll: (userId) => {
        return new Promise((resolve, reject) => {
            const query = 'SELECT * FROM tasks WHERE user_id = ?';
            db.query(query, [userId], (err, results) => {
                if (err) {
                    return reject(err);
                }
                resolve(results);
            });
        });
    },

    update: (id, completed) => {
        return new Promise((resolve, reject) => {
            const query = 'UPDATE tasks SET completed = ? WHERE id = ?';
            db.query(query, [completed, id], (err, results) => {
                if (err) {
                    return reject(err);
                }
                resolve(results);
            });
        });
    },
    
    

    delete: (id) => {
        return new Promise((resolve, reject) => {
            const query = 'DELETE FROM tasks WHERE id = ?';
            db.query(query, [id], (err, results) => {
                if (err) {
                    return reject(err);
                }
                resolve(results);
            });
        });
    },
};

module.exports = Task;
