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

exports.getEvent = () => {
    return new Promise((resolve, reject) => {
        conn.query('SELECT * from event JOIN category_event ON event.category_id = category_event.id_category',
        (err, result) => {
            if (!err) resolve(result);
            else reject(err);
        });
    });
}

exports.patchEvent = req => {
    const body = req.body;
  const id_event = req.params.id_event;
    return new Promise((resolve, reject) => {
        conn.query('update event SET event_name = ?, tagline = ?, description = ?,img_url = ?, category_id = ?, end_date =? where id_event = ?', [body.event_name, body.tagline, body.description, body.img_url, body.category_id,body.end_date, id_event],
        (err, result) => {
            if(!err) resolve(result);
            else reject(err);
        });
    });
}

// exports.patchEvent = (req,id_event) => {
//     // const body = req.body;
// //   const id_event = req.params.id_event;
//     return new Promise((resolve, reject) => {
//         conn.query('update event SET ? where id_event = ?', [req,id_event],
//         (err, result) => {
//             if(!err) resolve(result);
//             else reject(err);
//         });
//     });
// }