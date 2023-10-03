import axios from "axios";

export const Api = axios.create({
    baseURL: process.env.REACT_API
})

export default Api;