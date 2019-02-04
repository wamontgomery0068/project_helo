import React from "react";
import { Link } from "react-router-dom";
import './Nav.css'


// Imported Images Below

import house from '../../Images/house.png';
import add from '../../Images/add-page.png';
import off from '../../Images/turn-off.png';

// Imported Images Above


export default function Nav() {
    return (
        <div className = "Nav_Container">
            <div className = "Nav_Bar">

                <div className = "Nav_Picture">
                    <img className = "Nav_Picture_Icon" src = "https://vignette.wikia.nocookie.net/starwars/images/4/44/ChewieTCW-SWSB.png/revision/latest?cb=20110330231505" />
                </div>

                <div className = "Nav_Username">
                    <p className = "Nav_Username_Text"> Chewbacca0056 </p>
                </div>

                <Link to = "/dashboard">
                <button className = "Nav_Home">
                    <img className = "Nav_Icons" src = { house }></img>
                </button>
                </Link>

                <Link to = "/new_post">
                <button className = "Nav_AddPage">
                    <img className = "Nav_Icons" src = { add }></img>
                </button>
                </Link>

                <Link to = "/" >
                <button className = "Nav_LogOut">
                    <img className = "Nav_Icons" src = { off }></img>
                </button>
                </Link>
                
            </div>     
        </div>
    )
};