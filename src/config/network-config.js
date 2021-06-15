import axios from "axios";
import config from "./rapidapi-key-config";

var key = config.API_KEY;
const Api = axios.create({
    baseURL: "https://community-open-weather-map.p.rapidapi.com",
    "headers": {
        "x-rapidapi-key": key,
        "x-rapidapi-host": "community-open-weather-map.p.rapidapi.com"
    }
});

//Api.get("/weather?q=California%2Cus&lat=0&lon=0&id=2172797&lang=null&units=metric")

export default Api;