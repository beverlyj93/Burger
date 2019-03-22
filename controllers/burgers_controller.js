var express = require('express');
var burger = require('../models/burger');
var router = express.Router();

router.get('/', (req, res) => {
    burger.selectAll(stuff => {
        let obj = {
            burger: stuff
        }
        res.render('index', obj);
    })
})

router.post('/api/burger', (req, res) => {
    burger.insertOne('burger_name', req.body.name, result => {
        res.json(result);
    })
})

router.put('/api/burger/:id', (req, res) => {
    burger.updateOne('burger_name', req.body.name, 'id', req.body.id, result => {
        res.json(result);
    })
})

module.exports = router;