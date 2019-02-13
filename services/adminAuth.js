const repository = require('../repository/adminRepo');

exports.getGoogleUsersList = () => {
    return new Promise((resolve, reject) => {
        repository.getGoogleUsersList()
        .then((googleuserList)=>{
            return resolve(googleuserList)
        })
        .catch((error) => {
            return reject(error)
        })
    })
};