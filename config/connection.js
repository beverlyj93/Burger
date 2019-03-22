var mysql = require('mysql');

var connection = mysql.createConnection({
    host: 'localhost',
    port: 3306,
    user: 'root',
    password: 'MyMySQL93!@',
    database: 'burgers_db'
})

connection.connect(err => {
    if(err) throw err;

    console.log("Connected to MySQL database.");
})

module.exports = connection;