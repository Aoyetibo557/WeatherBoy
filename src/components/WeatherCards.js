import React, { useEffect } from 'react';
import './WeatherCards.css' ;
import { AiOutlineCaretDown, AiOutlineCaretUp } from 'react-icons/ai'
import { GrAddCircle } from 'react-icons/gr'
import AddNewCityImage from '../images/sunset.png';
import { Link } from 'react-router-dom';
import { useStateValue } from '../StateProvider'
import { actionTypes } from '../reducer';


function WeatherCards({addNewCity, name, country, image, degree, description, min, max, humidity, pressure}) {
    const [{}, dispatch] = useStateValue();
    
    
    useEffect(() => {
       
    }, [])


    const addCity = () => {
        dispatch({
           type: actionTypes.ADD_CITY,
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
       })
    }

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

    return !addNewCity ? (
        <div className="weathercard">
            <Link onClick={goToDetails} to={`/details/${name}`}>
                <div className="weathercard__container">
                    <p className="weathercard__name">{name}</p>
                    <span>{country}</span>
                    <div>
                        <img className="weathercard__image" src={image} alt="Weather Condition" />
                    </div>
                    <p className="weathercard__degree">{degree.toFixed()}&deg;</p>
                    <p className="weathercard__description"> {description} </p>

                    <div className="weathercard__bottom">
                        <div>
                            <AiOutlineCaretDown className="min" />
                            <p >{min.toFixed()}</p>
                            <p className="weathercard__bottom__p">Min</p>
                        </div>

                        <div>
                            <AiOutlineCaretUp className="max" /> 
                            <p>{max.toFixed()}</p>
                            <p className="weathercard__bottom__p">Max</p>
                        </div>
                    </div>
                    <div className="weathercard__btn__container">
                        <button onClick={addCity} className="weathercard__btn">
                            Add City +
                        </button>
                    </div>
                </div>
            </Link>
        </div>
    ):(
        <div className="weathercard__add__container">
            <div className="weathercard__add">
                <p className="weathercard__name__add">Add City</p>
                <div>
                    <GrAddCircle className="weathercard__addbtn" />
                </div>
                <div>
                    <img className="weathercard__image" src={AddNewCityImage} alt="" />
                </div>
            </div>

        </div>
    )
}

export default WeatherCards
