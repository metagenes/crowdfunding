'use-strict';

const express = require('express'),
    controller = require('../Controllers/event'),
    {validateUser} = require('../Helpers/middleware');

const Router = express();

Router.post('/', controller.postEvent);



module.exports = Router;