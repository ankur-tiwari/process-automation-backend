const axios = require('axios');
const config = require('../util/config.json');
const constants = require('../constant.json');

exports.SSMInvite = (email) => {
    return new Promise((resolve, reject) => {
    let body = {
        email : email
    }
    let headers = {
        'X-SSM-Token':process.env.APIKEY,
        'Accept': 'application/json',
        'Content-Type': 'application/json'
    }
    
    axios.post(`${config.SSM_BASE_URL}/InviteEmployee`, body, {headers: headers})
    .then(()=>{
        return resolve(constants.SSM_INVITE_SUCCESS);
    })
    .catch(()=>{
        return reject(constants.SSM_INVITE_FAIL);
    });
});
}