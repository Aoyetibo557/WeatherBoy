import React, {useState, useEffect} from 'react';
import './Home.css';
import WeatherCards from './WeatherCards';
// import Snowy from '../images/snowy.png';
// import Cloudy from '../images/cloudy.png'
import { fetchWeather } from './fetchWeather'
import { BsSearch } from 'react-icons/bs';
import { useStateValue } from '../StateProvider';
import AddedWeatherCards from './AddedWeatherCards';
import { AiOutlineCaretDown } from 'react-icons/ai'

function Home() {
    const [{cities}, dispatch] = useStateValue();
   
    const [homeError, setHomeError] = useState(" ");
    const [image, setImage] = useState();
    const [weatherData, setWeatherData] = useState({});
    const [query, setQuery] =useState('');

    const imageUrl = `http://openweathermap.org/img/wn/${image}@2x.png`;

   
    
    useEffect(() =>{
        search()
    },[])

   

    const search = async () => {
        await fetchWeather(query)
            .then(response => {
                console.log("Home:", response.data)
                setWeatherData(response.data)
                setImage(response.data.weather[0].icon)


            })
            .catch(function(error) {
                console.log("Eroor From Home", error.response.data)
                setHomeError(error.response.data.message)
                console.log("HomeError:", homeError)
            });
        // setWeatherData(data.data);
        // setImage(data.data.weather[0].icon)
        console.log("Weather Data", weatherData)
        setQuery('');  
       
    }


    return (
        <div className="home">

            <div className="home__input__container">
                <input 
                    type="text"
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                    placeholder="SEARCH..."  
                    className="home__input"
                />
                {/* onKeyPress={search} */}

                <button className="home__btn" onClick={search}>
                    <BsSearch className="home__btn__icon" />
                </button>
            </div>
            
           <div className="home__weathercards">
                {/* <WeatherCards 
                    name="Tunisia"
                    image={Cloudy}
                    degree={20}
                    max={26}
                    min={18}
                    description="Cloudy"
                />

                <WeatherCards 
                    name="Finland"
                    image={Snowy}
                    degree={10}
                    min={-15}
                    max={12}
                    description="Snowing"
                /> */}


                {weatherData.main && (
                    <WeatherCards 
                        name={weatherData.name}
                        country = {weatherData.sys?.country}
                        image={imageUrl}
                        degree={weatherData.main.temp}
                        description={weatherData.weather[0].description}
                        min={weatherData.main.temp_min}
                        max={weatherData.main.temp_max}
                        humidity = {weatherData.main.humidity}
                        pressure = {weatherData.main.pressure}
                    
                    />
                )}

                
                {/* <WeatherCards addNewCity /> */}
           </div>
           

            {/* cities from contenxt api */}
          <div className="home__cities">
           
            {cities?.length === 0 ? (
               <div className="home__emptyState">
                    <p>You currently dont have prefered cities</p>
               </div>
            ): (
                <div id="#myweather" className="_cities">
                    <div>
                        <h4>My Weather <span> <AiOutlineCaretDown className="home__icon" /></span></h4>
                    </div>

                    {cities.map((city) => (
                        <AddedWeatherCards
                            name={city.name}
                            country = {city.country}
                            image={city.image}
                            degree={city.degree}
                            description={city.description}
                            min={city.min}
                            max={city.max}
                            humidity = {city.humidity}
                        />
                    ))}
                </div>
            )}
          </div>

        </div>
    )
}

export default Home
