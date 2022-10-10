import axios from 'axios'



const API = axios.create({
    baseURL: 'http://localhost:8080/'
})

// API.interceptors.request.use((req) => {
//     if (localStorage.getItem('user')) {
//         req.headers.Authorization = `Bearer ${JSON.parse(localStorage.getItem('user')).token}`
//     }

//     return req
// })

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