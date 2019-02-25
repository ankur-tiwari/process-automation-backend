const userAuthRepository = require('../repository/userAuthRepo');

exports.getAuthorizedUsers = () => {
    return new Promise((resolve, reject) => {
        userAuthRepository.getAuthorizedUsersList()
        .then((authorizedUsersList)=>{
            return resolve(authorizedUsersList);
        })
        .catch((error) => {
            return reject(error);
        })
    })
};