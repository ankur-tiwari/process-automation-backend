const adminServices = require('../services/adminManagmentService')
const adminAuth = require('../services/adminAuth')
const constants = require('../constant.json');

exports.authenticateLogin = (req, res) => {
    let data = req.body
    adminAuth.checkAdmin(data)
    .then((adminData)=> {
        return adminAuth.checkPass(data, adminData)
    })
    .then(() => {
        return adminAuth.loginToken(data)
    })
    .then((token) => {
        let json = {}
        json.token = token
        json.success = true
        res.send(json)
    })
    .catch((err)=>{
        res.status(constants.HttpStatus.INTERNAL_SERVER_ERROR)
        res.send(err)
    })
};

exports.googleUserList = (req, res) => {
    adminAuth.googleUsersList()
    .then((userList) =>{
        res.status(constants.HttpStatus.OK)
        res.send(userList)
    })
    .catch((err)=>{
        res.status(constants.HttpStatus.INTERNAL_SERVER_ERROR)
        res.send(err)
    })
};

exports.ssmInviteAPI = (req, res) => {
    let data = req.body
    adminServices.ssmInviteAPI(data)
    .then((data) =>{
        res.status(constants.HttpStatus.OK)
        res.send(data)
    })
    .catch((err)=>{
        res.status(constants.HttpStatus.INTERNAL_SERVER_ERROR)
        res.send(err)
    })
};