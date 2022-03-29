const mysql = require('mysql');
const conn = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'demo',
    connectionLimit: 100
});

module.exports = conn;