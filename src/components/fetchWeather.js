import axios from 'axios';

const URL = 'http://api.openweathermap.org/data/2.5/weather';
const API_KEY = 'e927c271fd0ee3e49bb23ad4362b1dd2';

export const fetchWeather = async (query) => {
    const data = await axios.get(URL, {
        params:{
            q: query,
            units: 'metric',
            APPID: API_KEY,
        }
    })
 
    return data;
}

const forecastURL = 'http://api.openweathermap.org/data/2.5/forecast';
export const fetchForecast = async (query) => {
    const {data} = await axios.get(forecastURL, {
        params: {
            q: query,
            units: 'metric',
            APPID: API_KEY,
        }
    });
    return data;
}

// export default fetchWeatherErr;