const repository = require('../repository/adminRepo')
const APICalling = require('../util/APICall')
exports.adminService = () => {
    return new Promise((resolve, reject) => {
        repository.repo()
            .then((data) => {
                return resolve(data)
            })
            .catch((err) => {
                return reject(err)
            })
    })
}

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
