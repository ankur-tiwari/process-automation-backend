const googleAuthRepository = require('../repository/googleAuthRepo');

exports.getGoogleUsersList = () => {
    return new Promise((resolve, reject) => {
        googleAuthRepository.getGoogleUsersList()
        .then((googleuserList)=>{
            return resolve(googleuserList)
        })
        .catch((error) => {
            return reject(error)
        })
    })
};