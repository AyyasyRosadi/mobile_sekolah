import axios from "axios"


const api = axios.create({
    baseURL:'http://192.168.1.12:9897'
    //set with your api address after activate the services
})

export default api