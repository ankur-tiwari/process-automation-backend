const express = require('express');
const router = express.Router();
const adminManagementCtrl = require('../controller/adminManagementCtrl');

router.post('/SSMInvite', adminManagementCtrl.SSMInvite);

router.get('/getAuthorizedUsers', adminManagementCtrl.getAuthorizedUsers);

module.exports = router;