import { baseUrl } from "../config"
import axios from "axios"

export default axios.create({
    baseURL: baseUrl,
})
