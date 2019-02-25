const models = require('../models/index');

exports.getAuthorizedUsersList = () => {
    return new Promise((resolve, reject) => {
        models.authorizedUsers.findAll({ raw : true })
        .then((authorizedUsersList) => {
            return resolve(authorizedUsersList);
        })
        .catch((error) => {
            return reject(error);
        });
    });
};

