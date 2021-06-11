import React, { useEffect, useState } from "react";
import Api from "../../config/network-config";
import Top from "../card/card-top/top";
import Middle from "../card/card-middle/middle";
import Bottom from "../card/card-bottom/bottom"

const Weather = (props) => {

    const date = new Date();

    //const [location, setLocation] = useState(props.location);
    const [temp, setTemp] = useState("null");
    const [humidity, setHumidity] = useState("null");
    const [windSpeed, setWindSpeed] = useState("null");
    const [location, setLocation] = useState("null");
    const [isTempUnitCelcius, setIsTempUnitCelcius] = useState(true);
    const [weather, setWeather] = useState({
        id: 0,
        main: "none"
    });

    function getWeatherData(q){
        Api.get("/weather?" + `${q}` + "&units=metric").then((data) => {
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
                country: speechSynthesis.country,
            }
            location.stateCountry = location.state ? location.state + ", " + location.country : location.country;
            setLocation(location)
            setTemp(main.temp);
            setHumidity(main.humidity);
            setWindSpeed(wind.speed);
            debugger;
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
        debugger;
        if (props.useCoordinates) {
            navigator.geolocation.getCurrentPosition(function(position) { 
                q = `lat=${position.coords.latitude}` +  "&" + `lon=${position.coords.longitude}` 
                getWeatherData(q);  
            });
        } else {
            q = "q=" + props.location;
            getWeatherData(q);  
        }
        
    }, /*[temp, humidity, windSpeed, props]*/[]);

    return (<div className="weather-card">
        <Top location={location} date={date} />
        <hr />
        <Middle temp={temp} weatherState={weather.main} weatherId={weather.id} isTempUnitCelcius={isTempUnitCelcius}/>
        <hr />
        <Bottom humidity={humidity} windSpeed={windSpeed}  setIsTempUnitCelcius={setIsTempUnitCelcius} />
    </div>);
}

export default Weather;
