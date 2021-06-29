import logo from './logo.svg';
import Weather from './components/weather/weather';
import "./assets/scss/style.scss"
import scriptLoader from "react-async-script-loader";
import React, {
  useState
} from "react"
//import 'font-awesome/css/font-awesome.min.css'

function App({ isScriptLoaded, isScriptLoadSucceed }) {

  const conditions = {
    "sunny": "sunny",
    "cloudy": "cloudy",
    "snowy": "snowy",
    "fall": "fall",
    "rainy": "rainy"
  };
  const [backgroundImage, setBackgroundImage] = useState("sunny");
  let location;
  let useCoord = navigator.geolocation ? true : false;

  /* let location = {
    city: "California",
    state: "California",
    country: "US",
  }
  location.stateCountry = location.state ? location.state + ", " + location.country : location.country;
 */

  if (isScriptLoaded && isScriptLoadSucceed) {
    
    return (< div className={
      `wrapper ${backgroundImage}`
    } >
      <div className="app" >
        <Weather location={location} useCoordinates={useCoord} setBackgroundImage={setBackgroundImage} />
      </div>
    </div>
    );

  } else
    return <div></div>

}

export default scriptLoader([`https://maps.googleapis.com/maps/api/js?key=${process.env.REACT_APP_GOOGLE_MAP_API}&libraries=places&language=en`]) (App);