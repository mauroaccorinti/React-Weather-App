import React from "react"
//https://openweathermap.org/weather-conditions#Weather-Condition-Codes-2

const Middle = (props) => {
    let temp = props.temp;
    function cToF(n){
        return n * 1.8 + 32;
    }

    function fToC(n){
        return n - 32 / 1.8;
    }

    if(!props.isTempUnitCelcius){
        temp = cToF(temp);
    }
    return (
        <div class="middle">
            <p class="temperature">{Math.round(temp)}&#176;
            </p>
            <div class="weather">
                <img src={getImage(props.weatherId)} alt="" />
                <p>{/*props.weather*/}CLOUDY</p>
            </div>

        </div>
    );
}

function getImage(n) {

    switch (true) {
        case n >= 200 && n <= 232:
            return require("./img/thunder.PNG").default
        case n >= 300 && n <= 531:
            return require("./img/rainy.PNG").default
        case n >= 600 && n <= 622:
            return require("./img/snowy.PNG").default;
        case n >= 701 && n <= 781 || n === 801 || n === 802:
            return require("./img/cloudy.PNG").default;
        case n === 800:
            return require("./img/sunny.PNG").default;
        case n === 801:
            return require("./img/sunny-cloud.PNG").default;
        case n === 803:
        default:
            return require("./img/cloud.PNG").default;
        
    }
    return n;
}

export default Middle;