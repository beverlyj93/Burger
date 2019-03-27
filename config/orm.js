var connection = require('./connection');

var orm = {
    selectAll: (table, cb) => {
        connection.query('SELECT * FROM `f40fw2jqiz1m1a0h`.??;', [table], (err, result) => {
            if(err) throw err;
            cb(result);
        })
    },
    insertOne: (table, col, val, cb) => {
        connection.query('INSERT INTO `f40fw2jqiz1m1a0h`.?? (??) VALUES (?);', [table, col, val], (err, result) => {
            if(err) throw err;
            console.log('One was inserted.');
            cb(result);
        });
    },
    updateOne: (table, col, val, cond, condVal, cb) => {
        connection.query('UPDATE `f40fw2jqiz1m1a0h`.?? SET ?? = ? WHERE ?? = ?', [table, col, val, cond, condVal], (err, result) => {
            if(err) throw err;
            console.log('One was updated.');
            cb(result);
        })
    }
}

module.exports = orm;