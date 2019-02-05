const APICalling = require('../util/APICall')

exports.SSMInvite = (data) => {
    return new Promise((resolve, reject) => {
        APICalling.SSMInvite(data.email)
        .then(() => {
                return resolve()
            })
            .catch(() => {
                return reject()
            })
    })
}
