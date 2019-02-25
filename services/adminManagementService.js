const APICalling = require('../util/APICall')

exports.SSMInvite = (SSMData) => {
    return new Promise((resolve, reject) => {
        APICalling.SSMInvite(SSMData.email)
        .then((response) => {
                return resolve(response);
            })
            .catch((error) => {
                return reject(error);
            })
    })
}
