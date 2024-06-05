import { Location, Weather } from "../types";

export const location: Location = {
    name: 'Hamburg',
    country: 'Germany',
    region: '',
    lat: 0,
    lon: 0,
    tz_id: '',
    localtime_epoch: 0,
    localtime: ''
};

export const weather: Weather = {
    last_updated_epoch: 0,
    last_updated: '',
    temp_c: 30,
    temp_f: 0,
    is_day: 0,
    condition: {
        text: "Cloudy",
        icon: "123",
        code: 0
    },
    wind_mph: 0,
    wind_kph: 0,
    wind_degree: 0,
    wind_dir: '',
    pressure_mb: 0,
    pressure_in: 0,
    precip_mm: 0,
    precip_in: 0,
    humidity: 0,
    cloud: 0,
    feelslike_c: 0,
    feelslike_f: 0,
    windchill_c: 0,
    windchill_f: 0,
    heatindex_c: 0,
    heatindex_f: 0,
    dewpoint_c: 0,
    dewpoint_f: 0,
    vis_km: 0,
    vis_miles: 0,
    uv: 0,
    gust_mph: 0,
    gust_kph: 0
}