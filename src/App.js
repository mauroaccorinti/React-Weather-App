import logo from './logo.svg';
import Weather from './components/weather/weather';
import SearchBar from './components/search-bar/SearchBar'
import "./assets/scss/style.scss"
//import 'font-awesome/css/font-awesome.min.css'

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
  return (<div className = "wrapper" >
            <div className = "App" >
              <Weather location = {location} useCoordinates = {useCoord}/> 
              <SearchBar/>
            </div> 
          </div>
  );
}

export default App;