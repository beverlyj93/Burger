var mysql = require('mysql');

if (process.env.JAWSDB_URL) {
    mysql.createConnection(process.env.JAWSDB_URL);
}
else {
    var connection = mysql.createConnection({
        host: 'x3ztd854gaa7on6s.cbetxkdyhwsb.us-east-1.rds.amazonaws.com',
        port: 3306,
        user: 'g9sx1fuy8bxccz7a',
        password: 'reey04mqed7kgajh!@',
        database: 'f40fw2jqiz1m1a0h'
    });
}

connection.connect(err => {
    if (err) throw err;

    console.log("Connected to MySQL database.");
})

module.exports = connection;