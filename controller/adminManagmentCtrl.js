const adminServices = require('../services/adminManagmentService')
const constants = require('../constant.json');

exports.test = (req, res) => {
    adminServices.adminService()
    .then((data) =>{
        res.status(constants.HttpStatus.OK)
        res.send(data)
    })
    .catch((err)=>{
        res.status(constants.HttpStatus.INTERNAL_SERVER_ERROR)
        res.send(err)
    })
};

exports.authenticateLogin = (req, res) => {
    let data = req.body
    adminServices.checkAdmin(data)
    .then((adminData)=> {
        return adminServices.checkPass(data, adminData)
    })
    .then(() => {
        return adminServices.loginToken(data)
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