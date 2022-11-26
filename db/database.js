const mysql = require('mysql');
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    database: 'loginsystem',
    password: ''
});
connection.connect();
module.exports = connection;