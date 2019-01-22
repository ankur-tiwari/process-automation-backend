const models = require('../models/index');
const Sequelize = require('sequelize');

exports.repo = () => {
    return new Promise((resolve, reject) => {
        models.login.findAll( {raw : true } )
        .then((result)=>{
            return resolve("Registered Successfully")
        })
    });
};

exports.userAuth = (data) => {
    return new Promise((resolve, reject) => {
        models.login.findAll( {where : {
            users : data.user,
        } , raw : true})
        .then((result) => {
            return resolve(result)
        })
        .catch((error) => {
            reject(error);
        });
    });
};

