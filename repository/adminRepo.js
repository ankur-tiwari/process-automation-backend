const models = require('../models/index');

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

exports.googleUsersList = () => {
    return new Promise((resolve, reject) => {
        models.googleUsers.findAll({ raw : true })
        .then((result) => {
            return resolve(result)
        })
        .catch((error) => {
            return reject(error);
        });
    });
};

