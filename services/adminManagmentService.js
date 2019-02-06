const APICalling = require('../util/APICall')

exports.SSMInvite = (data) => {
    return new Promise((resolve, reject) => {
        APICalling.SSMInvite(data.email)
        .then((res) => {
                return resolve(res)
            })
            .catch((err) => {
                return reject(err)
            })
    })
}
