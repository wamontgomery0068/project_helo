import React, { Component } from "react";
// import { connect } from "react-redux";
import {Redirect} from "react-router-dom";
import './Auth.css';
import Wink from "../../Images/winkface.png";
import axios from "axios";

// Imports from the Ducks Folder Below


// Imports from the Ducks Folder Above

class Auth extends Component {
    constructor(){
        super();

        this.state = {
            username: "",
            password: ""
        };
        this.handleChange = this.handleChange.bind(this);
    };

    handleChange(e){
        this.setState({ [e.target.name]: e.target.value})
    };

    handleLogin = () => {
        const { username, password } = this.state;
        axios.post(`/auth/login`, { username, password }).then(response => {
            // console.log(response)
            this.props.history.push("/dashboard")
        });
    };

    handleRegister = () => {
        const { username, password } = this.state;
        axios.post(`/auth/register`, { username, password }).then(response => {
            // console.log(response)
            this.props.history.push("/dashboard")
        });
    };

    render() {
        return (
            <div className = "Auth_Container">
                <div className = "Auth_Card">
                    <div className = "Auth_Card_Logo">
                        <img className = "Logo_Image" src= {Wink} alt="Winky Smiley" />
                    </div>
                    <div className = "Auth_Card_Title">
                        <p className = "Auth_Card_Title_Text"> Helo </p>
                    </div>
                    <div className = "Auth_Card_Field">

                        <p className = "Auth_Card_Field_Text">
                             Username: 
                                <input 
                                    onChange = {this.handleChange}
                                    value = {this.state.username}
                                    name = "username"
                                    placeholder = "Username"
                                    className = "Auth_Input_1" 
                                />
                        </p>

                        <p className = "Auth_Card_Field_Text">
                             Password: 
                                <input 
                                    onChange = {this.handleChange}
                                    value = {this.state.password}
                                    name = "password"
                                    placeholder = "Password"
                                    className = "Auth_Input_2" 
                                />
                        </p>

                    </div>
                    <div className = "Auth_Card_Buttons">

                        <button 
                            className = "Auth_Card_Button_Login" 
                            onClick = {this.handleLogin}
                        >
                            <p 
                                className = "Auth_Card_Button_Login_Text"
                            > Login 
                            </p>

                        </button>

                        <button 
                            className = "Auth_Card_Button_Register" 
                            onClick = {this.handleRegister}
                        >
                            <p 
                                className = "Auth_Card_Button_Register_Text"
                            > Register 
                            </p>

                        </button>

                    </div>
                </div>
            </div>
        );
    }
};

// const mapStateToProps = (state) => {
//     return {
//         reducer: state.reducer
//     };
// };

// export default connect (mapStateToProps, {login: login}, {register: register}) (Auth);

export default Auth;
