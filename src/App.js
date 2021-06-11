import logo from './logo.svg';
import Weather from './components/weather/weather';
import "./assets/scss/style.scss"

function App() {

  let location;
  let useCoord = navigator.geolocation ? true : false;

  /* let location = {
    city: "California",
    state: "California",
    country: "US",
  }
  location.stateCountry = location.state ? location.state + ", " + location.country : location.country;
 */
  return ( <div className = "wrapper" >
    <div className = "App" >
    <Weather location = {
      location
    } useCoordinates = {useCoord}
    /> </div> </div>
  );
}

export default App;