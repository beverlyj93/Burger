var mysql = require('mysql');

if (process.env.JAWSDB_URL) {
    mysql.createConnection(process.env.JAWSDB_URL);
}
else {
    var connection = mysql.createConnection({
        host: 'localhost',
        port: 3306,
        user: 'root',
        password: 'MyMySQL93!@',
        database: 'f40fw2jqiz1m1a0h'
    });
}

connection.connect(err => {
    if (err) throw err;

    console.log("Connected to MySQL database.");
})

module.exports = connection;