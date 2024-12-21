/*Dependencies:
-Bootstrap 5.3.3
-react-spinners 0.15.0
-react
*/
import { useState } from "react";
import React from "react";

//CSS
import "./App.css";

//Components
import DisplayWeather from "./Components/DisplayWeather";
import Header from "./Components/Header";
import WeatherWarningSystem from "./Components/WeatherWarningSystem";
import Loading from "./Components/Loading";
import Radars from "./Components/Radars";

//search query has been inputed
//Users can input a language in english or irish
function App() {
  //Stores an error if it occurs
  const [error, setError] = useState("");

  //Our API data for OpenWeatherMap Geocode API
  const [geoData, setGeoData] = useState([]);

  //Will hold the latitude of the location the user inputs
  const [latitude, setLatitude] = useState("");

  //Will hold the location of the longitude the user inpits
  const [longitude, setLongitude] = useState("");

  // Checks if data is still loading, initially set to false
  const [loading, setLoading] = useState(false);

  //allows user to find the weather in their current location
  //We will be using the latitude and longitude variables for this
  const [searchLocation, setSearchLocation] = useState("");

  async function fetchLocation() {
    //Uses a literal string so that we can use our searchLocation variable within the link
    //Please note that this API can only fetch locations within The Republic of Ireland as indicated by the "IE" after the searchLocation variable is inputted
    const GeocodeAPI = `https://api.openweathermap.org/geo/1.0/direct?q=${searchLocation},IE&appid=`;
    try {
      setLoading(true);
      //Waits for a response from our API
      const response2 = await fetch(GeocodeAPI);
      //Stores our API data within a JSON
      const json2 = await response2.json();
      //Sets the latitude and longitude of our location returned for the search result
      setLongitude(json2[0].lon);
      setLatitude(json2[0].lat);
      //Stores our json API data in geoData
      setGeoData(json2);
      setLoading(false);
      //Catches an error if it occurs
    } catch (error) {
      setError(error.message);
      setLoading(false);
    }
  }

  //Handles our button pressed when the user wants to submit their search query

  function HandleSubmitLocation(e) {
    //If there is no location inputted we will not fetch our API
    if (!searchLocation) {
      return;
    } else {
      e.preventDefault();
      fetchLocation();
    }
  }

  //Stores the inputted search location and handles our search bar functionalty
  function HandleSearchLocation(e) {
    setSearchLocation(e.target.value);
  }

  if (loading) {
    return <Loading />;
  } else if (error) {
    return (
      <>
        <div className="container-md">
          <h1>⚠️ An error has occured: {error}. Please refresh the page!</h1>
          <p>Potential Causes:</p>
          <ul>
            <li>
              You may have inputted an invalid location. This app only displays
              Irish Weather.
            </li>
            <li>
              The API may have reached the call limit. If this is the case,
              please check back in an hour.
            </li>
            <li>
              An error on our end. If this occurs, feel free to email us{" "}
              <a href="">SampleName@email.ie</a> with a screenshot of the error
              and error code.
            </li>
          </ul>
        </div>
      </>
    );
  } else {
    return (
      <>
        <Header />
        <WeatherWarningSystem />
        {/*Bootstrap column made by using the following doccumentation
        https://getbootstrap.com/docs/5.3/layout/columns/ */}
        <div className="container text-center">
          <form onSubmit={HandleSubmitLocation}>
            <div className="row align-items-center">
              <div className="col">
                <input
                  type="text"
                  placeholder="Enter Location..."
                  value={searchLocation}
                  onChange={HandleSearchLocation}
                  className="form-control"
                />
              </div>
              <div className="col-auto">
                {/*Bootstrap button made by using the following documentation
                https://getbootstrap.com/docs/5.3/components/buttons/ */}
                <button type="submit" className="btn btn-primary">
                  Search
                </button>
              </div>
            </div>
          </form>
        </div>
        {geoData.length > 0 && (
          <div>
            <DisplayWeather
              longFromParent={longitude}
              latFromParent={latitude}
              locationFromParent={searchLocation}
            />
          </div>
        )}
        <br />
        <Radars />
        <footer>
          <p>
            This weather app only accepts locations within the Republic of
            Ireland.
          </p>
          <p>
            NOTE: This weather app is limited to a certain number of API calls
            per hour. If the App suddenly stops working it means the API call
            limit has been reached. If this occurs, you will need to check back
            in at a later time.
          </p>
          <p>
            All Weather and Geocode data have provided by{" "}
            <a href="https://open-meteo.com/">OpenMeteo</a> and{" "}
            <a href="https://openweathermap.org/">OpenWeatherMap</a>. Radar data
            is provided by <a href="https://www.rainviewer.com/" />
            <a href="https://www.rainviewer.com/">RainViewer</a>.
          </p>
        </footer>
      </>
    );
  }
}

export default App;
