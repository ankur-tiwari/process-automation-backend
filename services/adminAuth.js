const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const repository = require('../repository/adminRepo');
const constants = require('../constant.json');

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
            .catch(() => {
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
        var token = jwt.sign(data,process.env.SECRETEKEY);
        return resolve(token)
    });
};

exports.googleUsersList = () => {
    return new Promise((resolve, reject) => {
        repository.googleUsersList()
        .then((userList)=>{
            return resolve(userList)
        })
            .catch((err) => {
                return reject(err)
            })
    })
};