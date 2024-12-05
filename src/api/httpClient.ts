import axios from "axios";


export const httpClient = axios.create( {
    withCredentials: true,
    baseURL: 'http://127.0.0.1:8000',
    // headers: {
    //     'Set-Cookie': 'SameSite=None; Secure; Path=/; Partitioned'
    // }
    
})