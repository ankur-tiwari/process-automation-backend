var express = require('express');
var router = express.Router();
const adminManagmentCtrl = require('../controller/adminManagmentCtrl')

router.post('/login', adminManagmentCtrl.authenticateLogin)

router.post('/SSMInvite', adminManagmentCtrl.ssmInviteAPI)

router.get('/googleUserList', adminManagmentCtrl.googleUserList)


module.exports = router;