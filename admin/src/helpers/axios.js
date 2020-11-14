import axios from 'axios'
import { api } from '../urlConfig'

const axiosinstance = axios.create({
    baseURL: 'http://localhost/2000/api',
    // headers: {
    //     'Authorization': ''
    // }
})
export default axiosinstance