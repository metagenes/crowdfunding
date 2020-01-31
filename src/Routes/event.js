'use-strict';

const express = require('express'),
    controller = require('../Controllers/event'),
    {validateUser} = require('../Helpers/middleware');

const Router = express();

Router.post('/', validateUser, controller.postEvent);
Router.get('/', controller.getEvent);
Router.patch('/:id_event',validateUser, controller.patchEvent);



module.exports = Router;