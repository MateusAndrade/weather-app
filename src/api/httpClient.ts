import axios, { AxiosRequestConfig } from "axios"

const BASE_URL = 'https://api.weatherapi.com/v1'
// @todo: move to .env file
const API_KEY = 'b6f18f62d11948e2acb145634240406'


const axiosClient = axios.create({
    baseURL: BASE_URL
})

const request = <T>(options: AxiosRequestConfig<T>) => {
    const params = {
        ...options.params,
        key: API_KEY,
    }

    return axiosClient({ ...options, params }).then((response) => response.data)
}


export { request }