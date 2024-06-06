import axios, { AxiosRequestConfig } from "axios"

const axiosClient = axios.create({
    baseURL: process.env.API_URL
})

const request = <T, R>(options: AxiosRequestConfig<T>) => {
    const params = {
        ...options.params,
        key: process.env.API_KEY,
    }

    return axiosClient<R>({ ...options, params }).then((response) => response.data)
}


export { request }