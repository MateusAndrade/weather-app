import { Forecastday, Hour } from "../api/types"

export const formatTemperature = (temperature: number) => {
    return `${temperature}°`
}

export const isTimeInAboveRange = (time: number, range: number) => time >= range

export const getForecastsFromTime = (time: number, forecasts: Forecastday[]): Hour[] => {
    const MAX_HOURS = 24

    const [forecastsForCurrentDay, forecastsForNextDay] = forecasts

    const hours = forecastsForCurrentDay.hour.filter(hour => {
        const forecastTime = new Date(hour.time).getHours()
        return isTimeInAboveRange(forecastTime, time)
    })


    return [...hours, ...forecastsForNextDay.hour].filter((_, index) => index < MAX_HOURS);
}