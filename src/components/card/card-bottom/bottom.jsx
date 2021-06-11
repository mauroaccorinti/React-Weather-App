import React, { useState } from "react"


const Bottom = (props) => {
    function cPressed(){
        props.setIsTempUnitCelcius(true);
        setCelciusButtonDisabled(true);
        setFahrenheitButtonDisabled(false);
    }
    function fPressed(){
        props.setIsTempUnitCelcius(false);
        setCelciusButtonDisabled(false);
        setFahrenheitButtonDisabled(true);
    }
    const [isCelciusDisabled, setCelciusButtonDisabled] = useState(true);
    const [isFahrenheitDisabled, setFahrenheitButtonDisabled] = useState(false);

    return (
        <div class="bottom">
            <div class="humidity">
                <img src={require("./img/water-icon.png").default} alt="water droplet"/>
                <p>{Math.round(props.humidity)}%</p>
        </div>
                <div class="wind-speed">
                    <img src={require("./img/wind-sock.png").default} alt="wind speed"/>
                        <p>{Math.round(props.windSpeed)} m/s</p>
        </div>
                    <div class="degree-unit">
                        <button disabled={isCelciusDisabled} onClick={cPressed}>C&#176;</button>
                        <button disabled={isFahrenheitDisabled} onClick={fPressed}>F&#176;</button>
                    </div>
                </div>
    );
}

export default Bottom;