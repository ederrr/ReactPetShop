import axios from 'axios'

export const http = axios.create({

	baseURL: 'http://192.168.1.107:3000/'
})