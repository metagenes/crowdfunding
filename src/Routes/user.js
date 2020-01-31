'use-strict';

const express = require('express'),
    controller = require('../Controllers/user'),
    {validateUser} = require('../Helpers/middleware');

const Router = express();

Router.post('/register', controller.registerUser);
Router.post('/login', controller.loginUser);


module.exports = Router;