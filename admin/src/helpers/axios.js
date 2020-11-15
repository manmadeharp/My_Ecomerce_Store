import axios from 'axios'
import { api } from '../urlConfig'

const token = window.localStorage.getItem('token')

const axiosInstance = axios.create({
    baseURL: 'http://localhost:2000/api',
    headers: {
        'authorization': token ? `Bearer ${token}` : ''
    }
})
export default axiosInstance