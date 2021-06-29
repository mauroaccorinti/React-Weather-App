import React, { /* createContext, */ useEffect, useState } from "react";
import Api from "../../config/network-config";
import Top from "../card/card-top/top";
import Middle from "../card/card-middle/middle";
import Bottom from "../card/card-bottom/bottom"
import SearchBar from '../search-bar/SearchBar'

const Weather = ({
    location: receivedLocation,
    useCoordinates,
    setBackgroundImage,
    ...props }) => {

    const date = new Date();

    //const [location, setLocation] = useState(props.location);
    const [temp, setTemp] = useState(null);
    const [humidity, setHumidity] = useState(null);
    const [windSpeed, setWindSpeed] = useState(null);
    const [shownLocation, setShownLocation] = useState([]);//////

    //const SearchedLocationContext = createContext(setSearchedLocation);
    const [coordinates, setCoordinates] = useState({
        lat: null,
        lng: null
    });

    const [isTempUnitCelcius, setIsTempUnitCelcius] = useState(true);
    const [weather, setWeather] = useState({
        id: 0,
        main: "none"
    });



    function getWeatherData(q) {
        Api.get(`/weather?${q}&units=metric`).then((data) => {
            const {
                main,
                name,
                sys,
                weather,
                wind
            } = data.data;
            //const icon = `https://openweathermap.org/img/wn/${weather[0]["icon"]}@2x.png`;

            let location = {
                city: name,
                country: sys.country,
            }
            location.stateCountry = location.state ? `${location.state}, ${location.country}` : location.country;
            setShownLocation(location)
            setTemp(main.temp);
            setHumidity(main.humidity);
            setWindSpeed(wind.speed);
            setWeather({
                id: weather[0].id,
                main: weather[0].main
            })
            console.log("rendered");
            //setLocation()
        })
    }
    useEffect(() => {
        let q;
        if (useCoordinates && !coordinates.lat) {
            navigator.geolocation.getCurrentPosition(function (position) {
                q = `lat=${position.coords.latitude}&lon=${position.coords.longitude}`
                getWeatherData(q);
            });
        } else {
            //q = "q=" + (searchedLocation) ? searchedLocation : receivedLocation;
            q = `lat=${coordinates.lat}&lon=${coordinates.lng}`
            getWeatherData(q);
        }

    }, /*[temp, humidity, windSpeed, props]*/[coordinates, useCoordinates]);

    return (<div className="weather-card">
        <Top location={shownLocation} date={date} />
        <hr />
        <Middle temp={temp} weatherState={weather.main} weatherId={weather.id} isTempUnitCelcius={isTempUnitCelcius} setBackgroundImage={setBackgroundImage}/>
        <hr />
        <Bottom humidity={humidity} windSpeed={windSpeed} setIsTempUnitCelcius={setIsTempUnitCelcius} />
        <SearchBar setCoordinates={setCoordinates}/>
        {/* <SearchedLocationContext.Provider value={""}>
            
        </SearchedLocationContext.Provider> */}

    </div>);
}

export default Weather;
