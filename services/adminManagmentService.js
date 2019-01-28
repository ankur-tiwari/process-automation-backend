const APICalling = require('../util/APICall')

exports.ssmInviteAPI = (data) => {
    return new Promise((resolve, reject) => {
        APICalling.ssmInviteAPI(data.email)
        .then(() => {
                return resolve()
            })
            .catch(() => {
                return reject()
            })
    })
}
