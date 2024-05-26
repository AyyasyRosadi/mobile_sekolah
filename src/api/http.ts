import axios from "axios"


const api = axios.create({
    baseURL:'http://localhost:9897'
    //set with your api address after activate the services
})

export default api