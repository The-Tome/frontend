const axios = require('axios').default;

const sendData = (data) => {
    axios.post ('http://localhost:3001/save', data)
    .then (Response => {
        console.log(Response)
    })
}

const getUser = (data) => {
    axios.post ('http://localhost:3001/user', data)
    .then (Response => {
        console.log(Response.data)
        localStorage.setItem('firstName',Response.data.first_name)
        localStorage.setItem('lastName',Response.data.last_name)
        return Response.data
    })
}

const createUser = (data) => {
    axios.post ('http://localhost:3001/createUser', data)
    .then (Response => {
        console.log(Response.data)
        localStorage.setItem('firstName',Response.data.first_name)
        localStorage.setItem('lastName',Response.data.last_name)
        return Response.data
    })
}


export {sendData, getUser, createUser}