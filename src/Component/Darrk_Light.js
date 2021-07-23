import React, { useState } from 'react'
import './styles.css'

export default function Darrk_Light() {
    const [darkMode, setDarkMode] = useState(false);
    return (
        <div className={darkMode ? "dark-mode" : "light-mode"}>
            <div>
                <h1>Hyeee It's {darkMode ? 'Dark' : 'Light'}Mode</h1>
            </div>

            <div className="container">

                <span style={{ color: darkMode ? "grey" : "yellow" }}>☀︎</span>

                <div className='switch-checkbox'>

                    <label className="switch">
                        <input type='checkbox' onChange={() => setDarkMode(!darkMode)} />
                        <span className="slider round"> </span>
                    </label>

                </div>

                <span style={{ color: darkMode ? 'white' : 'gray' }}> ☽</span>


            </div>

        </div>
    )
}
