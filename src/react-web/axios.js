const axios = require('axios').default;

const sendData = (data) => {
    axios.post ('http://localhost:3001/save', data)
    .then (Response => {
        console.log(Response)
    })
}

export {sendData}