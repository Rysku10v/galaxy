import React from 'react';
import './Header.css'
import {NavLink} from "react-router-dom";


const Header = () => {

    return <div className="Header">
        <div className="container">
            <div className="Header-content">
                <div className="logo">
                    <NavLink to="/">Movie logo</NavLink>
                </div>

                <div className="menu">
                    <nav>
                        <NavLink className="text" to="/">Home</NavLink>
                        <NavLink className="text" to="/popular">Popular</NavLink>
                        <NavLink className="text" to="/top-rated">Top Rated</NavLink>
                        <NavLink className="text" to="/upcoming">Upcoming</NavLink>
                        <NavLink className="text" to="/now-playing">Now playing</NavLink>
                        <NavLink className="text" to="/Latest">Latest</NavLink>
                    </nav>

                    <div className="search">
                        <input type="search" className="form-control"/>
                        <button className="btn">search</button>
                    </div>
                </div>
            </div>
        </div>
    </div>

};

export default Header;