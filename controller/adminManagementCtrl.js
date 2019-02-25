const adminServices = require('../services/adminManagementService');
const adminAuth = require('../services/adminAuth');
const constants = require('../constant.json');

exports.getAuthorizedUsers = (request, response) => {
    adminAuth.getAuthorizedUsers()
    .then((userList) =>{
        response.status(constants.HttpStatus.OK);
        response.send(userList);
    })
    .catch((error)=>{
        response.status(constants.HttpStatus.INTERNAL_SERVER_ERROR);
        response.send(error);
    })
};

exports.SSMInvite = (request, response) => {
    adminServices.SSMInvite(request.body)
    .then((data) =>{
        response.status(constants.HttpStatus.OK);
        response.send(data);
    })
    .catch((error)=>{
        response.status(constants.HttpStatus.INTERNAL_SERVER_ERROR);
        response.send(error);
    })
};