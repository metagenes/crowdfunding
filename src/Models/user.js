'use-strict';

const conn = require('../Configs/conn'), 
    bcrypt = require('bcryptjs'),
    salt = bcrypt.genSaltSync(10);

exports.registerUser = req => {
    const body = req.body
    const pass = bcrypt.hashSync(body.password, salt);

    return new Promise((resolve, reject) => {

        conn.query(`INSERT INTO users SET email = ?, name = ?, password = ?, contribution = 0, img_user = ?, phone = ?`,
            [body.email,body.name, pass,img_user,body.phone],
            (err, result) => {
                if(!err) resolve(result);
                else reject(err);
            });
    });
}

exports.loginUser = req => {
    return new Promise((resolve, reject) => {
        conn.query(`SELECT * FROM users WHERE email = ?`, [req.body.email],
        (err, result) => {
            if(!err) resolve(result);
            else reject(err);
        });
    });
}

exports.getEmail = req => {
    const email = req.params.email || req.body.email;
    return new Promise((resolve, reject) => {
        conn.query('SELECT id_user, name FROM users WHERE email = ?', [email],
        (err, result) => {
            if(!err) resolve(result);
            else reject(err);
        });
    });
}
