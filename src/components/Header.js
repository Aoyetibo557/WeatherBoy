import React from 'react';
import './Header.css'
import { Link } from 'react-router-dom'
import { HiOutlineMenuAlt4 } from 'react-icons/hi'
import { GrClose } from 'react-icons/gr';
import Theme from './Theme';



function Header({isOpen, toggle}) {
    return (
        <div className="header">
            <div className="header__left">
                {isOpen ? (
                    <GrClose onClick={toggle} className="header__menu" />
                ):(
                    <HiOutlineMenuAlt4 onClick={toggle} className="header__menu" />
                )}
               <div>
                   {/* Logo Image */}
                    <Link className="header__link" to="/"> 
                        Weather<span>Boy</span>
                    </Link>
               </div>
            </div>

            <div className="header__middle">
                <h4>
                    {/* TODAY */}
                    {new Date().toUTCString()}
                </h4>
            </div>
            
            <div className="header__right">
                <Theme />
            </div>
        </div>
    )
}

export default Header
