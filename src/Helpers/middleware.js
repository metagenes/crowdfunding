
const response = require('./response'),
jwt = require('jsonwebtoken'),
secretKey = process.env.SECRET_KEY || '15045';

exports.validateUser = (req, res, next) => {
let token = req.headers['authorization'];
if(!token) return res.status(401).json({status : 401, message : "Unauthorized"});
token = token.replace('Bearer ', '');
jwt.verify(token, secretKey, (err, decoded) => {
    if (err) {
        response.error(res, "Invalid token");
    } else {
        req.body.email = decoded.email;
        next();
    }
});
}
