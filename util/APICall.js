const axios = require('axios');

exports.ssmInviteAPI = (email) => {
    return new Promise((resolve, reject) => {
        
    let body = {
        email : 'rishic71@gmail.com'
    }
    let headers = {
        'X-SSM-Token':process.env.APIKEY,
        'Accept': 'application/json',
        'Content-Type': 'application/json'
    }
    
    axios.post('https://screenshotmonitor.com/api/v2/InviteEmployee', body, {headers: headers})
    .then(()=>{
        return resolve()

    })
    .catch((err)=>{
        return reject()
    })
})
}