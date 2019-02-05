import React, { Component } from "react";
import No_Image from "../../Images/no-photo.png";
import axios from "axios";
import './Form.css';

class Form extends Component {
    constructor(){
        super();

        this.state = {
            title: "",
            image_url: "",
            content: ""
        };
    };

    handleInput = e => {
        this.setState({[e.target.name]: e.target.value})
    };

    handleSubmit = e => {
        e.preventDefault();
        const { title, image_url, content } = this.state;
        axios.post(``)
    }

    render() {
        return (
            <div className = "Form">
                <div className = "Form_Container">
                    <div className = "Form_Container_Title">
                        <p className = "Form_Container_Title_Text"> New Post </p>
                    </div>

                    <div className = "Form_Container_Title_Input">

                        <p className = "Form_Container_Title_Input_Text"> Title: </p>
                        <input 
                            onChange = {this.handleInput} 
                            className = "Form_Container_Title_Input_Input" 
                            type = "text"
                        />

                    </div>

                    <div className = "Form_Container_Image">
                        <img className = "Form_Container_Image_Image" src = {No_Image} />
                    </div>

                    <div className = "Form_Container_Image_Url_Input">

                        <p className = "Form_Container_Image_Url_Input_Text"> Image URL: </p>

                        <input 
                            onChange = {this.handleInput} 
                            className = "Form_Container_Image_Url_Input_Input" 
                            type = "text" 
                        />

                    </div>

                    <div className = "Form_Container_Content_Input">

                        <p className = "Form_Container_Content_Input_Text"> Content: </p>

                        <input 
                            onChange = {this.handleInput} 
                            className = "Form_Container_Content_Input_Input" 
                            type = "text" 
                        />

                    </div>

                    <button className = "Form_Container_Post_Button">
                        <p className = "Form_Container_Post_Button_Text"> Post </p>
                    </button>
                </div>
            </div>
        );
    }
};

export default Form;