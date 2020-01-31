'use-strict';

const model = require('../Models/event'),
    response = require('../Helpers/response'),
    bcrypt = require('bcryptjs'),
    jwt = require('jsonwebtoken'),
    secretKey = process.env.SECRET_KEY || '15045';
 

exports.postEvent = (req, res) => {
    if (req.body.event_name === null || req.body.event_name === "") return response.error(res, "name can't be empty");
    if (req.body.tagline === null || req.body.tagline === "") return response.error(res, "tagline can't be empty");
    if (req.body.description === null || req.body.description === "") return response.error(res, "description can't be empty");
    img_url = "https://clara-indonesia.com/n_template/images/default-user.png";
    if (req.body.goal_amount === null || req.body.goal_amount === "") return response.error(res, "goal amount cant be empty");
    current_amount = "0";
    if (req.body.category_id === null || req.body.category_id === "") return response.error(res, "category id cant be empty");
    start_date = new Date();
    if (req.body.id_user === null || req.body.id_user === "") return response.error(res, "id user cant be empty");
    if (req.body.end_date === null || req.body.end_date === "") return response.error(res, "end date cant be empty");
    model
    .postEvent(req)
            .then(result => {
                response.success(res, result);
            }).catch(err => response.error(res, err));
}

exports.getEvent = (req, res) => {
    model.getEvent(req)
    .then(result => {
    response.success(res, result);
    })
    .catch(err => response.error(res, err));
}


exports.patchEvent = (req, res) => {
    model
    .patchEvent(req)
        .then(result => {
            response.success(res, result);
        }).catch(err => response.error(res, err));
}

