import { BASE_URL } from "./baseurl";
import axios from "axios";

export const getAllData = async()=>{
    let globalData;
    await axios.get(`${BASE_URL}`)
    .then(res=>{
        globalData = res.data;
    })
    return globalData;
}