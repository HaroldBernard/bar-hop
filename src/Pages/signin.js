import React, { Component } from "react";
import greenBg from "../Components/Background/green-bg.png"
import "../Components/Background/style.css";
import Button from "../Components/Button"
import TextArea from "../Components/TextArea"
import "../Components/Flexbox/flexbox.css";
import {Facebook} from "../Components/Input/sign-in";


class Signin extends Component {
    clicked1 = event => {
        event.preventDefault();
        console.log("hello");
    }
    render() {
        return (
            <>
                <div className="flexbox">
                <TextArea 
                    placeholder="Email"
                >
                </TextArea>
                <TextArea 
                    placeholder="Password"
                >
                </TextArea>
                </div>                
                <Button onClick={this.clicked1}>
                    Sign In
                </Button>
                <Facebook/>
                <img className="greenBg" src={greenBg} alt={"greenBg"} />
                
            </>
        )
    }

}

export default Signin;