import React, { Component } from "react";
import './Post.css';

class Post extends Component {
    constructor(){
        super();

        this.state = {};
    };

    render() {
        return (
            <div className = "Post">
                <div className = "Post_Container">
                    <div className = "Post_Container_Top">
                        <div className = "Post_Container_Top_Title">
                            <p className = "Post_Container_Top_Title_Text"> Movies </p>
                        </div>
                        <div className = "Post_Container_Top_Author">
                            <p className = "Post_Container_Top_Author_Text"> by: R2-D2 </p>
                        </div>
                        <div className = "Post_Container_Top_Profile">
                            <img className = "Post_Container_Top_Profile_Image" src = "http://www.fubiz.net/wp-content/uploads/2015/12/starwarsicons-14-900x872.jpg" />
                        </div>
                    </div>
                    <div className = "Post_Container_Bottom">
                        <div className = "Post_Container_Bottom_Image">
                            <img className = "Post_Container_Bottom_Movie_Image" src = "https://pbs.twimg.com/media/DuJp0KRX4AETRg7.jpg:large"/>
                        </div>
                        <div className = "Post_Container_Bottom_Content">
                            <div className = "Post_Container_Bottom_Content_Paragraph">
                                <p className = "Post_Container_Bottom_Content_Text"> Bumblebee' is certainly the best example of what this franchise is meant to be, and should it continue on this path, the Transformers can become exciting and enjoyable all over again. </p>
                            </div>
                            <div className = "Post_Container_Bottom_Content_Buttons">
                                <button className = "Post_Container_Bottom_Edit_Button">
                                    <p className = "Post_Container_Bottom_Button_Text"> Edit </p>
                                </button>
                                <button className = "Post_Container_Bottom_Submit_Button">
                                    <p className = "Post_Container_Bottom_Button_Text"> Submit </p>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
};

export default Post;