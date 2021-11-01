import React, { useEffect } from 'react';
import './Theme.css'

function Theme() {    
    

    // to toggle the classes between dark and light mode
    useEffect(() => {
        const checkbox = document.getElementById('checkbox');
        checkbox.addEventListener('change', () => {
            document.body.classList.toggle('dark')
         console.log("TOGGLE")
        })
    }, [])
    
    

    return (
        <div className="theme">
            <input type="checkbox" id="checkbox" className="checkbox" />
            <label for="checkbox" className="label" >
                <p className="theme__p">LIGHT</p>
                <p className="theme__p"> DARK</p>
                <div className="ball"></div>
            </label>
        </div>
    )
}

export default Theme
