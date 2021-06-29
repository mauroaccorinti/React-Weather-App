import React from "react"
import thunder from "./img/thunder.PNG"
//https://openweathermap.org/weather-conditions#Weather-Condition-Codes-2  
const Middle = ({
    temp,
    weatherState,
    weatherId,
    isTempUnitCelcius,
    setBackgroundImage,
    ...props
}) => {
    function cToF(n) {
        return n * 1.8 + 32;
    }

    function fToC(n) {
        return n - 32 / 1.8;
    }

    if (!isTempUnitCelcius) {
        temp = cToF(temp);
    }
    return (
        <div className="middle">
            <p className="temperature">{Math.round(temp)}&#176;
            </p>
            <div className="weather">
                <img src={getImage(weatherId, setBackgroundImage)} alt="" />
                <p>{weatherState}</p>
            </div>

        </div>
    );
}

function getImage(n, setBackgroundImage) {

    const conditions = {
        "sunny": "sunny",
        "cloudy": "cloudy",
        "snowy": "snowy",
        "fall": "fall",
        "rainy": "rainy"
    };
    /*   
        const config = {
            "algo": ()=> {
                hagoAlgo();
                hagoAlgo2();
            },
            "otraCosa": hagoOtraCosa
        };
    
        const ejecuto = config[valor] || default ;
        ejecuto();
     */
    switch (true) {
        case (n >= 200) && (n <= 232):
            setBackgroundImage(conditions.rainy);
            return thunder;
        case (n >= 300) && (n <= 531):
            setBackgroundImage(conditions.rainy);
            return require("./img/rainy.PNG").default
        case (n >= 600) && (n <= 622):
            setBackgroundImage(conditions.snowy);
            return require("./img/snowy.PNG").default;
        case ((n >= 701) && (n <= 781)) || (n === 801) || (n === 802):
            setBackgroundImage(conditions.cloudy);
            return require("./img/cloudy.PNG").default;
        case (n === 800):
            setBackgroundImage(conditions.sunny);
            return require("./img/sunny.PNG").default;
        case (n === 801):
            setBackgroundImage(conditions.cloudy);
            return require("./img/sunny-cloud.PNG").default;
        case (n === 803):
        default:
            setBackgroundImage(conditions.cloudy);
            return require("./img/cloud.PNG").default;
    }
}

export default Middle;