const userAuthRepository = require('../repository/userAuthRepo');

exports.getAuthorizedUsers = () => {
    return new Promise((resolve, reject) => {
        userAuthRepository.getAuthorizedUsersList()
        .then((googleuserList)=>{
            return resolve(googleuserList);
        })
        .catch((error) => {
            return reject(error);
        })
    })
};