const axios = require('axios');
const config = require('../config.json')

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
        return resolve()

    })
    .catch((err)=>{
        return reject()
    })
})
}