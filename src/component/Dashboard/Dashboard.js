import React, { Component } from "react";
// import { connect } from 'react-redux';
// import {getInformation} from "../../ducks/reducer";
import axios from "axios";
import './Dashboard.css'

import Search from "../../Images/search.png";
import Trash from "../../Images/Trash.png";

class Dashboard extends Component {
    constructor(){
        super();

        this.state = {
            posts: []
        };
    };

    componentDidMount = () => {
        axios.get("/information/all").then(response => {
            this.setState({posts: response.data})
        })
    }

    render() {
        const posts = this.state.posts.map(information => {
            return(
                <div className = "Data_Entry">
                    <div className = "Data_Name">
                        <p className = "Data_Name_Text"> {information.title} </p>
                    </div>
                    <div className = "Data_Author">
                        <p className = "Data_Author_Text"> by: {information.username} </p>
                    </div>
                    <div className = "Data_Profile_Image">
                        <img className = "Profile_Image" src = {information.profile_image} />
                    </div>

                    <button 

                        className  = "Data_Profile_Trash" 
                        title = "Delete" 
                        onClick ={() => {this.props.deleteInformation()}}
                    >
                        <img className = "Profile_Trash_Image" src = {Trash} />

                    </button>
                </div>
            )
        })
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
                   {posts}
                </div>
    
            </div>
        );
    }
};

// const mapStateToProps = (state) => {
//     return {
//         reducer: state.information
//     };
// };

// export default connect(mapStateToProps, {getInformation: getInformation}) (Dashboard);

export default Dashboard;