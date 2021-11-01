import React from 'react';
import { Link } from 'react-router-dom';
import { IoIosPerson } from 'react-icons/io';
import { TiWeatherWindy } from 'react-icons/ti';
import { MdAddAlert } from 'react-icons/md';
import { RiContactsLine } from 'react-icons/ri';
import { FaQuestionCircle } from 'react-icons/fa'
import './Sidebar.css';

function Sidebar({isOpen, toggle}) {
    return (
        <div isOpen={isOpen} className={isOpen ? "sidebar toggle" : "sidebar"} >
            <div className="sidebar__list">
                <div className="sidebar__list__user">
                    <IoIosPerson className="_icon" />
                    <p>Welcome username</p>
                </div>

                <div className="sidebar__link__container">
                    <Link onClick={toggle} className="sidebar__link" to="#myweather">
                       <TiWeatherWindy className="_icon"  /> My Weather
                    </Link>

                    <Link onClick={toggle} className="sidebar__link" to="/account">
                       <MdAddAlert className="_icon" /> Alerts
                    </Link>

                    <Link onClick={toggle} className="sidebar__link" to="/contact">
                        <RiContactsLine className="_icon" /> Contact
                    </Link>

                    <Link onClick={toggle} className="sidebar__link" to="/faq">
                        <FaQuestionCircle className="_icon" /> FAQ
                    </Link>
                </div>


            </div>
        </div>
    )
}

export default Sidebar
