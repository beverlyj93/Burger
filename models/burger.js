var orm = require('../config/orm');

var burger = {
    selectAll: cb => {
        orm.selectAll('burgers', result => {
            cb(result);
        })
    },
    insertOne: (col, val, cb) => {
        orm.insertOne('burgers', col, val, result => {
            cb(result);
        })
    },
    updateOne: (col, val, cond, condVal, cb) => {
        orm.updateOne('burgers', col, val, cond, condVal, result => {
            cb(result);
        })
    }
}

module.exports = burger;