import { Current, Location, Day } from "../../../../src/api/types";

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

export const weather: Current = {
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

export const daily: Day = {
    "maxtemp_c": 16.8,
    "maxtemp_f": 62.3,
    "mintemp_c": 9.5,
    "mintemp_f": 49.1,
    "avgtemp_c": 13.4,
    "avgtemp_f": 56.0,
    "maxwind_mph": 8.7,
    "maxwind_kph": 14.0,
    "totalprecip_mm": 0.44,
    "totalprecip_in": 0.02,
    "totalsnow_cm": 0.0,
    "avgvis_km": 10.0,
    "avgvis_miles": 6.0,
    "avghumidity": 61,
    "daily_will_it_rain": 1,
    "daily_chance_of_rain": 88,
    "daily_will_it_snow": 0,
    "daily_chance_of_snow": 0,
    "condition": {
        "text": "Patchy rain nearby",
        "icon": "//cdn.weatherapi.com/weather/64x64/day/176.png",
        "code": 1063
    },
    "uv": 5.0
}