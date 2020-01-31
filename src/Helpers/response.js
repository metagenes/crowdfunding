'use-strict';

exports.success = (res, result) => {
    let form = {
        status : 200,
        result
    }
    res.json(form);
}

exports.error = (res, result) => {
    let form = {
        status : 401,
        result
    }
    res.json(form);
}