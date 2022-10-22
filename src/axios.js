import axios from 'axios'



const API = axios.create({
    baseURL: 'http://localhost:8080/'
    // baseURL: 'https://notes-crackdsa.herokuapp.com/'
})

API.interceptors.request.use((req) => {
    if (localStorage.getItem('crackdsa-user')) {
        req.headers.auth = `${JSON.parse(localStorage.getItem('crackdsa-user')).token}`
    }

    return req
})

export const userRegister = async (userData) => {

    let user = await API.post('/auth/register', userData)

    return user;
}

export const userLogin = async (userData) => {

    let user = await API.post('/auth/login', userData)

    return user;
}

export const sendOTP = async (userData) => {

    let user = await API.post('/auth/otpsent', userData)

    return user;
}

export const verifyOTP = async (userData) => {

    let user = await API.post('/auth/otpverify', userData)

    return user;
}

export const addProblem = async (userData) => {

    let user = await API.post('/user/createtodo', userData)

    return user;
}

export const fetchProblems=async()=>{
    let data=await API.get('/user/alltodo')

    return data;
}
