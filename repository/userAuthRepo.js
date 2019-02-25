const models = require('../models/index');

exports.getAuthorizedUsersList = () => {
    return new Promise((resolve, reject) => {
        models.authorizedUsers.findAll({ raw : true })
        .then((authorizedUsers) => {
            return resolve(authorizedUsers);
        })
        .catch((error) => {
            return reject(error);
        });
    });
};

