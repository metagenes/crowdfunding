'use-strict';

const express = require('express'),
    user = require('./user'),
    event = require('./event'),
    {validateUser} = require('../Helpers/middleware');

const Router = express.Router();

Router.get('/', (req, res) => {
    res.json({
        message: "Karyawan API"
    });
})



Router.use('/user', user);
Router.use('/event', event);



module.exports = Router;