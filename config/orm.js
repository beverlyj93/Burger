var connection = require('./connection');

var orm = {
    selectAll: (table, cb) => {
        connection.query('SELECT * FROM `burgers_db`.??;', [table], (err, result) => {
            if(err) throw err;
            cb(result);
        })
    },
    insertOne: (table, col, val, cb) => {
        connection.query('INSERT INTO `burgers_db`.?? (??) VALUES (?);', [table, col, val], (err, result) => {
            if(err) throw err;
            console.log('One was inserted.');
            cb(result);
        });
    },
    updateOne: (table, col, val, cond, condVal, cb) => {
        connection.query('UPDATE `burgers_db`.?? SET ?? = ? WHERE ?? = ?', [table, col, val, cond, condVal], (err, result) => {
            if(err) throw err;
            console.log('One was updated.');
            cb(result);
        })
    }
}

module.exports = orm;