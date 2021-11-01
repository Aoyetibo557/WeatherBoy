import React, { useState, useEffect } from 'react';
import './AddedWeatherCard.css';
import { Link } from 'react-router-dom'
import { AiOutlineCaretDown, AiOutlineCaretUp } from 'react-icons/ai'
import { GrAddCircle } from 'react-icons/gr'
import { useStateValue } from '../StateProvider';
import { actionTypes } from '../reducer';
import Rain from '../images/rain.png'
import ClearSky from '../images/sunny.png'
import Mist from '../images/mist.png'
import Snow from '../images/snowy.png';
import Cloudy from '../images/cloudy.png'
import Fog from '../images/fog.png'
import ScatteredClouds from '../images/scatteredClouds.png'
import Haze from '../images/fog.png';


function AddedWeatherCards({addNewCity, name, country, image, degree, description, min, max, humidity, pressure}) {
    const [{}, dispatch] = useStateValue();
    
    const goToDetails = () => {
        dispatch({
            type: actionTypes.SEE_TEMP_CITY,
            city: {
                name,
                country,
                image,
                degree,
                description,
                min,
                max,
                humidity,
                pressure,
            }
        });

        dispatch({
            type: actionTypes.SET_QUERY,
            query: name,
        })

    }

    const removeCity = () => {
        dispatch({
            type: actionTypes.REMOVE_CITY,
            name: name,
        })
    }    
    return (
        <div className="addedWeatherCard">
            
                <div>
                    <Link className="container" onClick={goToDetails} to={`/details/${name}`}>
                        <div>
                            <p className="weathercard__name">{name}</p>
                            <span>{country}</span>
                        </div>

                        <div>
                            {description === "light rain" ? (
                                <img className="addedweathercard__image" src={Rain} alt="Weather Condition" />
                            ):""}
                            {description === "clear sky" ? (
                                <img className="addedweathercard__image" src={ClearSky} alt="Weather Condition" />
                            ):""}
                            {description === "mist" ? (
                                <img className="addedweathercard__image" src={Mist} alt="Weather Condition" />
                            ): ""}
                            {description === "snow" ? (
                                <img className="addedweathercard__image" src={Snow} alt="Weather Condition" />
                            ): ""}
                            {description === "overcast clouds" ? (
                                <img className="addedweathercard__image" src={Cloudy} alt="Weather Condition" />
                            ): ""}
                            {description === "few clouds" ? (
                                <img className="addedweathercard__image" src={Cloudy} alt="Weather Condition" />
                            ): ""}
                            {description === "scattered clouds" ? (
                                <img className="addedweathercard__image" src={ScatteredClouds} alt="Weather Condition" />
                            ): ""}
                            {description === "broken clouds" ? (
                                <img className="addedweathercard__image" src={ScatteredClouds} alt="Weather Condition" />
                            ): ""}
                            {description === "light snow" ? (
                                <img className="addedweathercard__image" src={Snow} alt="Weather Condition" />
                            ): ""}
                            {description === "fog" ? (
                                <img className="addedweathercard__image" src={Fog} alt="Weather Condition" />
                            ): ""}
                            {description === "haze" ? (
                                <img className="addedweathercard__image" src={Haze} alt="Weather Condition" />
                            ): ""}
                        </div>

                        <div>
                            <p className="addedweathercard__degree">{degree.toFixed()}&deg;</p>
                            <p className="addedweathercard__description"> {description} </p>
                        </div>

                        <div>
                            <AiOutlineCaretDown className="_icon" />
                            <p >{min.toFixed()}</p>
                            <p className="addedweathercard__p">Min</p>
                        </div>

                        <div>
                            <AiOutlineCaretUp className="_icon" /> 
                            <p>{max.toFixed()}</p>
                            <p className="addedweathercard__p">Max</p>
                        </div>
                      </Link>
                    </div>
                    <div className="btn__container">
                        <button onClick={removeCity} className="btn">
                            Remove City
                        </button>
                    </div>

                </div>
           
    )
}

export default AddedWeatherCards
