import axios from "axios";  

const request = axios.create({
    baseURL:'http://localhost:3000/api/v1/'
})

export const get = async (path,options={})=>{
    const respone = await request.get(path,options)
    return respone.data
}

export default request