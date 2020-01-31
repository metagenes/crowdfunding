'use-strict';

const conn = require('../Configs/conn');

exports.postEvent = req => {
    const body = req.body;
    return new Promise((resolve, reject) => {
        conn.query('insert into event SET event_name = ?, tagline = ?, description = ?,  goal_amount = ?, current_amount = ?, img_url = ?, category_id = ?, start_date = ?, end_date = ?, id_user =?', [body.event_name, body.tagline, body.description, body.goal_amount,current_amount, img_url, body.category_id, start_date, body.end_date, body.id_user],
        (err, result) => {
            if(!err) resolve(result);
            else reject(err);
        });
    });
}