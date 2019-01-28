var express = require('express');
var router = express.Router();
const adminManagmentCtrl = require('../controller/adminManagmentCtrl')

router.get('/testApi', adminManagmentCtrl.test)
router.post('/login', adminManagmentCtrl.authenticateLogin)

router.post('/ssmInviteAPI', adminManagmentCtrl.ssmInviteAPI)


module.exports = router;