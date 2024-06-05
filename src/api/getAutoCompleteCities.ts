import { request } from "./httpClient"

const getAutoCompleteCities = (searchQuery: string) => request({
    url: `/search.json`,
    params: {
        q: searchQuery
    }
})

export { getAutoCompleteCities }