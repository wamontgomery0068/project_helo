import React, { Component } from "react";
import Search from "../../Images/search.png";
import './Dashboard.css'

import Trash from "../../Images/Trash.png";

class Dashboard extends Component {
    constructor(){
        super();

        this.state = {};
    };

    render() {
        return (
            <div className = "Dashboard_Container">
                <div className = "Dashboard_Search">
                    <input className = "Search_Input" type = "text" placeholder = "Search by Title" />
                    <button className = "Search_Button" title = "Search">
                        <img className = "Search_Image" src = { Search } />
                    </button>
                    <button className = "Reset_Button">
                        <p className = "Reset_Text"> Reset </p>
                    </button>
                    <div className = "My_Post">
                        <p className = "My_Post_Text"> My Posts </p>
                    </div>
                    <input className = "Input_Checkbox" type = "Checkbox" />
                </div>
                <div className = "Dashboard_Entry">
                    <div className = "Data_Entry">
                        <div className = "Data_Name">
                            <p className = "Data_Name_Text"> Movies </p>
                        </div>
                        <div className = "Data_Author">
                            <p className = "Data_Author_Text"> by: R2-D2 </p>
                        </div>
                        <div className = "Data_Profile_Image">
                            <img className = "Profile_Image" src = "http://www.fubiz.net/wp-content/uploads/2015/12/starwarsicons-14-900x872.jpg" />
                        </div>
                        <button className = "Data_Profile_Trash" title = "Delete">
                        <img className = "Profile_Trash_Image" src = {Trash} />
                        </button>
                    </div>
                </div>
        
            </div>
        );
    }
};

export default Dashboard;