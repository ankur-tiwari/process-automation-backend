const models = require('../models/index');

exports.getGoogleUsersList = () => {
    return new Promise((resolve, reject) => {
        models.googleUsers.findAll({ raw : true })
        .then((googleUsers) => {
            return resolve(googleUsers);
        })
        .catch((error) => {
            return reject(error);
        });
    });
};

