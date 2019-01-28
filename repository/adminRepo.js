const models = require('../models/index');

exports.repo = () => {
    return new Promise((resolve, reject) => {
            return resolve("TEST API SUCCESS")
    });
};

exports.userAuth = (data) => {
    return new Promise((resolve, reject) => {
        models.login.findAll( {where : {
            users : data.user,
        } , raw : true})
        .then((result) => {
            return resolve(result)
        })
        .catch((error) => {
            reject(error);
        });
    });
};

