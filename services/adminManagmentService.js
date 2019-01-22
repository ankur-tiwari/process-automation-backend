const repository = require('../repository/adminRepo')
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken')
const constants = require('../constant.json')
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

exports.checkAdmin = (data) => {
    return new Promise((resolve, reject) => {
        repository.userAuth(data)
            .then((result) => {
                if (result.length) {
                    return resolve(result)
                }
                else {
                    return reject(constants.ERROR.NOT_AUTHORIZED)
                }
            })
            .catch((error) => {
                return reject(constants.ERROR.NOT_AUTHORIZED)
            })
    })
};

exports.checkPass = (data, adminData) => {
    return new Promise((resolve, reject) => {
        let value = bcrypt.compareSync(data.password, adminData[0].password);
        if (value) {
            return resolve()
        }
        else {
            return reject(constants.ERROR.NOT_AUTHORIZED)
        }
    })
};

exports.loginToken = (data) => {
    return new Promise((resolve, reject) => {
        var token = jwt.sign(data, 'secreteKey');
        return resolve(token)
    });
};
