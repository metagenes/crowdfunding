'use-strict';

const model = require('../Models/user'),
    response = require('../Helpers/response'),
    bcrypt = require('bcryptjs'),
    jwt = require('jsonwebtoken'),
    secretKey = process.env.SECRET_KEY || '15045';
 

exports.registerUser = (req, res) => {
    if (req.body.name === null || req.body.name === "") return response.error(res, "name can't be empty");
    if (req.body.email === null || req.body.email === "") return response.error(res, "email can't be empty");
    if (req.body.password === null || req.body.password === "") return response.error(res, "Password can't be empty");
    if (!isPasswordValid(req.body.password)) return response.error(res, "Password must have lower case, upper case, number, and minimal 8 digits");
    if (req.body.phone === null || req.body.phone === "") return response.error(res, "phone number can't be empty");
    img_user = "https://www.wom.co.id/upload-pegawai/default-user.png";

    model.getEmail(req).then(result => {
        if (result.length != 0) response.error(res, "email has been registered, please change your email");
        model.registerUser(req).then(result => {
            response.success(res, "User created successfully");
        }).catch(err => {
            response.error(res, err);
        })
    }).catch(err => response.error(res, err));
}

const isPasswordValid = password => {
    const tester = /(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}/;
    return password.match(tester) == null ? false : true;
};



exports.loginUser = (req, res) => {
    if (req.body.email == null || req.body.email === "") return response.error(res, "Username can't be empty");
    if (req.body.password == null || req.body.password === "") return response.error(res, "Password can't be empty");
    if (!isPasswordValid(req.body.password)) return response.error(res, "Password must have lower case, upper case, number, and minimal 8 digits");

    model.loginUser(req).then(result => {
        if (result.length != 0) {
            if (bcrypt.compareSync(req.body.password, result[0].password)) {
                const token = jwt.sign({
                    id_user: result[0].id_user,
                    name: result[0].name,
                    email: result[0].email,
                }, secretKey, {
                    expiresIn: '1d'
                });
                response.success(res, {
                    id_user: result[0].id_user,
                    name: result[0].name,
                    email: result[0].email,
                    token: token
                });
            } else {
                response.error(res, "Password incorrect")
            }
        } else {
            response.error(res, "User not found")
        }
    });
}
