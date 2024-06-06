import { request } from "./httpClient"
import { Current, Forecast, Location } from "./types";

interface DailyForecastQueryParams {
    cityName: string;
    days: number;
}

interface DailyForecastReponse {
    location: Location
    current: Current
    forecast: Forecast
}


const getDailyForecast = ({ cityName, days }: DailyForecastQueryParams) => request<DailyForecastQueryParams, DailyForecastReponse>({
    url: `/forecast.json`,
    params: {
        q: cityName,
        days,
    }
})

export { getDailyForecast }