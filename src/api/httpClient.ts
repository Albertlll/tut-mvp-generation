import axios from "axios";


export const httpClient = axios.create( {
    withCredentials: true,
    baseURL: 'http://localhost:8000/',
    // headers: {
    //     'Set-Cookie': 'SameSite=None; Secure; Path=/; Partitioned'
    // }
    
})