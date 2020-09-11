import React from 'react'
import { NavLink } from 'react-router-dom';
import image from './image/image.png';

const NavBar = () => {
    return(
        <>
        <div className="container-fluid nav_bg">
            <div className="row">                

            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <img className="navbar-brand" src={image} style={{height: 60}}/>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav ml-auto">
                    <li className="nav-item active">
                        <NavLink className="nav-link" to="/">
                            Home
                        </NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className="nav-link" to="/article">
                            Articles
                        </NavLink>
                    </li>                   
                    </ul>                    
                </div>
                </nav>
                </div>
        </div>
        </>
    )
}

export default NavBar;