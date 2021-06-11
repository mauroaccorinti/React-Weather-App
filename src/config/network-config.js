import axios from "axios"

const Api = axios.create({
    baseURL: "https://community-open-weather-map.p.rapidapi.com",
    "headers": {
        "x-rapidapi-key": "d3e083ad8cmshf1189cd9d5772bcp18d573jsndc56dbeaaf5c",
        "x-rapidapi-host": "community-open-weather-map.p.rapidapi.com"
    }
});

//Api.get("/weather?q=California%2Cus&lat=0&lon=0&id=2172797&lang=null&units=metric")

export default Api;