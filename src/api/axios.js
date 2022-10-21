import axios from "axios";

const baseUrl = 'http://localhost:3000/';

const instance = axios.create({
    baseURL: baseUrl,
    headers: {
        'Content-Type': 'application/json',
    },
})

instance.interceptors.request.use(
    reqData => {
        console.log('reqData', reqData)
    },
    err => {
        console.log('err', err)
    }
)

instance.interceptors.response.use(
    reqData => {
        console.log('reqData', reqData)
    },
    err => {
        console.log('err', err)
    }
)


export default instance
