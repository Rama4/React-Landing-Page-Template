import React, { useState, useEffect } from "react";
import "../App.css";
import 'react-calendar/dist/Calendar.css';
import {Button, Textinput, Message} from '../components/shared';
import { useNavigate } from "react-router-dom";

const Login = () => {
    const navigate = useNavigate();
    const [message, setMessage] = useState("");
    
    const onSubmitPress = () => {
      setMessage("Logged in Successfully!");
      setTimeout(()=>{
        navigate('/eventOrganizer');
      },1500)
    };

    const renderPasswordField = (name, label) => {
        return (
          <div className="bookInputRow">
              <Textinput name={name} inputType="password" / >
              <label id="bookInputLabel" htmlFor={name}>{label}</label>
          </div>
        );
    };

    const renderEmailField = (name, label) => {
        return (
          <div className="bookInputRow">
              <Textinput name={name} inputType="email"  / >
              <label id="bookInputLabel" htmlFor={name}>{label}</label>
          </div>
        );
    };
    

    return (
        <div className="container">
            <h3>Login</h3>
            <Message text={message} type={1}/>
            {renderEmailField("email", "Email Address")}
            {renderPasswordField("password", "Password")}
            <div className="bookInputRow">
                <a href="/forgotPassword" >Forgot Password</a>
            </div>
            <Button className="textinputWidth" onPress={onSubmitPress} title="Join" colorType="Pink"/>
        </div>
    );
};

export default Login;