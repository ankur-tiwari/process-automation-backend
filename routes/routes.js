var express = require('express');
var router = express.Router();
const adminManagmentCtrl = require('../controller/adminManagmentCtrl')

router.post('/SSMInvite', adminManagmentCtrl.SSMInvite)

router.get('/getGoogleUserList', adminManagmentCtrl.getGoogleUserList)

module.exports = router;