const APICalling = require('../util/APICall')

exports.SSMInvite = (SSMData) => {
    return new Promise((resolve, reject) => {
        APICalling.SSMInvite(SSMData.email)
        .then((res) => {
                return resolve(res)
            })
            .catch((error) => {
                return reject(error)
            })
    })
}
