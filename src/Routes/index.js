'use-strict';

const express = require('express'),
    user = require('./user');

const Router = express.Router();

Router.get('/', (req, res) => {
    res.json({
        message: "Karyawan API"
    });
})



Router.use('/user', user);



module.exports = Router;