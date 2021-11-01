import React,{ useEffect, useState} from 'react';
import { Link } from 'react-router-dom';
import './Details.css'
import { IoIosArrowRoundBack } from 'react-icons/io';
import { useStateValue } from '../StateProvider';
import { fetchForecast } from './fetchWeather'; 
import { BsDropletHalf, BsArrowDownShort } from 'react-icons/bs'
import NotFound from './NotFound';

function Details() {
    const [{tempCities, query}, dispatch] = useStateValue();
    const [forecast, setForecast] = useState({});

    useEffect(() => {
        getForecast()
    }, [])

    const getForecast = async () => {
        const forecastData = await fetchForecast(query);
        setForecast(forecastData?.list)
        console.log("Forecast", forecastData?.list)
    }

    const getIcon = (path) => {
        const imagUrl = `http://openweathermap.org/img/wn/${path}@2x.png`;
        return imagUrl;
    }

    const editDegree = (deg) => {
        var n = deg?.toFixed(0)
        return n;
    }

    const formatDate = (val) => {
        var options = { year: 'numeric', month: 'long', day: 'numeric'};
        return new Date(val).toLocaleDateString([], options);
    }

    const formatTime = (val) => {
        var time = new Date(val).toLocaleTimeString("en-US");
        return time;
    }

    return (
        <div className="details">
            
            <div className="details__container">
                <div className="details__back">
                   <Link to="/">
                        <IoIosArrowRoundBack className="details__back__icon" />
                   </Link>
                </div>


                {tempCities?.length === 0 ? (
                    <div>
                        No City Selected
                    </div>
                ):(
                    tempCities.map((city) => (
                        <div className="details__card ">
                            <div className="details__card__top" >
                                <div>
                                    <p className="details__degree">{editDegree(city.degree)}&deg;</p>
                                    <span className="details__description">{city.description}</span>
                                    <div className="details__max__min">
                                        <div>
                                            <p className="min__max">{editDegree(city.min)}&deg;</p>
                                            <p>MIN</p>
                                        </div>
                                  
                                       <div>
                                           <p className="min__max">{editDegree(city.max)}&deg;</p>
                                            <p>MAX</p>
                                       </div>
                                    </div>
                                    <div className="details__hum__pres">
                                        <p> <BsDropletHalf /> {city?.humidity ?  `Humidity: ${city?.humidity}%` : '' }</p>
                                        <p><BsArrowDownShort />{city?.pressure ? `Pressure: ${city.pressure}` : ''} </p>
                                    </div>
                                </div>
                                
                                <div>
                                    <img className="details__image" src={city.image} alt=" "/>
                                </div>
                                <div>
                                    <h3 className="details__name">{city.name}</h3>
                                </div>
                            </div>


                            {/* Bottom card */}
                            <div>
                                {forecast?.length === 0 ? (
                                    ""
                                ):(
                                    <div className="details__card__bottom">
                                       
                                        <div className="details__right">
                                            <div>
                                                <p className="details__date" >{formatDate(forecast[1]?.dt_txt)}</p>
                                                <p className="details__date" >{formatTime(forecast[1]?.dt)}</p>
                                                <img src={getIcon(forecast[1]?.weather[0].icon)} alt ="" />
                                                <p className="details__mini__degree" >{editDegree(forecast[1]?.main.temp)}&deg;</p>
                                                <p className="details__mini__description">{forecast[1]?.weather[0].description}</p>
                                                <p className="details__mini__wind">
                                                    Wind:<span>{editDegree(forecast[1]?.wind?.speed)}km/h</span>
                                                </p>
                                                {/*  <span>{forecast[1]?.wind?.deg}&deg;</span>
                                                    Speed */}
                                            </div>
                                            <div>
                                                <p className="details__date" >{formatDate(forecast[7]?.dt_txt)}</p>
                                                <p className="details__date" >{formatTime(forecast[7]?.dt)}</p>
                                                <img src={getIcon(forecast[7]?.weather[0].icon)} alt="" />
                                                <p className="details__mini__degree">{editDegree(forecast[7]?.main.temp)}&deg;</p>
                                                <p className="details__mini__description" >{forecast[7]?.weather[0].description}</p>
                                                <p className="details__mini__wind" >
                                                    Wind: 
                                                    <span>{editDegree(forecast[7]?.wind?.speed)} km/h</span>
                                                </p>
                                                {/*  <span>{forecast[7]?.wind?.deg}&deg;</span>
                                                    Speed */}
                                            </div>
                                            <div>
                                                <p className="details__date" >{formatDate(forecast[15]?.dt_txt)}</p>
                                                <p className="details__date" >{formatTime(forecast[15]?.dt)}</p>
                                                <img src={getIcon(forecast[15]?.weather[0].icon)} alt="" />
                                                <p className="details__mini__degree" >{editDegree(forecast[15]?.main.temp)}&deg;</p>
                                                <p className="details__mini__description" >{forecast[15]?.weather[0].description}</p>
                                                <p className="details__mini__wind" >
                                                    Wind: 
                                                     <span>{editDegree(forecast[15]?.wind?.speed)} km/h</span>

                                                </p>
                                                {/* <span>{forecast[15]?.wind?.deg}&deg;</span>
                                                    Speed */}
                                            </div>
                                             <div>
                                                <p className="details__date" >{formatDate(forecast[23]?.dt_txt)}</p>
                                                <p className="details__date" >{formatTime(forecast[23]?.dt)}</p>
                                                <img src={getIcon(forecast[23]?.weather[0].icon)} alt="" />
                                                <p className="details__mini__degree" >{editDegree(forecast[23]?.main.temp)}&deg;</p>
                                                <p className="details__mini__description" >{forecast[23]?.weather[0].description}</p>
                                                <p className="details__mini__wind" >
                                                    Wind: 
                                                    <span>{editDegree(forecast[23]?.wind?.speed)} km/h</span>

                                                </p>
                                                {/*  <span>{forecast[23]?.wind?.deg}&deg;</span>
                                                    Speed */}
                                            </div>
                                            <div>
                                                <p className="details__date" >{formatDate(forecast[31]?.dt_txt)}</p>
                                                <p className="details__date" >{formatTime(forecast[31]?.dt)}</p>
                                                <img src={getIcon(forecast[31]?.weather[0].icon)} alt="" />
                                                <p className="details__mini__degree" >{editDegree(forecast[31]?.main.temp)}&deg;</p>
                                                <p className="details__mini__description" >{forecast[31]?.weather[0].description}</p>
                                                <p className="details__mini__wind" >
                                                    Wind: 
                                                    <span>{editDegree(forecast[31]?.wind?.speed)} km/h</span>
                                                </p>
                                                {/* <span>{forecast[31]?.wind?.deg}&deg;</span>
                                                    Speed */}
                                            </div>

                                            <div>
                                                <p className="details__date" >{formatDate(forecast[39]?.dt_txt)}</p>
                                                <p className="details__date" >{formatTime(forecast[39]?.dt)}</p>
                                                <img src={getIcon(forecast[34]?.weather[0].icon)} alt="" />
                                                <p className="details__mini__degree" >{editDegree(forecast[39]?.main.temp)}&deg;</p>
                                                <p className="details__mini__description" >{forecast[39]?.weather[0].description}</p>
                                                <p className="details__mini__wind" >
                                                    Wind: 
                                                    <span>{editDegree(forecast[39]?.wind?.speed)} km/h</span>
                                                </p>
                                                {/* <span>{forecast[31]?.wind?.deg}&deg;</span>
                                                    Speed */}
                                            </div>
                                        </div>
                                    </div>
                                   
                                )}
                            </div>
                        </div>
                    ))
                )}
            
                {/* <span className="details__circle"></span>      */}
            </div>
        </div>
    )
}

export default Details
