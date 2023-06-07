import React, { useState } from "react";
import "../App.css";
import 'react-calendar/dist/Calendar.css';
import {Button, Textinput, Message} from '../components/shared';
import { useNavigate } from "react-router-dom";

const SignUp = () => {
    const navigate = useNavigate();
    const [message, setMessage] = useState("");

    const onSubmitPress = () => {
      setMessage("User Signed up Successfully!");
      setTimeout(()=>{
        navigate('/eventOrganizer');
      },1500);
    };

    const renderInputField = (name, label) => {
        return (
          <div className="bookInputRow">
              <Textinput name={name}  / >
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
    
    const renderTermsAndConditionsCheckbox = () => {
        return (
          <div className="bookInputRow">
              <input name="agree" type="checkbox" className="coloredBorder TNCcheckbox" />
              <label id="bookInputLabel" htmlFor="agree" >I accept terms and conditions</label>
          </div>
        );
    };

    return (
        <div className="container">
            <h2>Join Benefit Live</h2>
            <Message text={message} type={1}/>
            {renderInputField("firstName", "First Name")}
            {renderInputField("lastName", "Last Name")}
            {renderEmailField("email", "Email Address")}
            {renderTermsAndConditionsCheckbox()}
            <Button className="textinputWidth" onPress={onSubmitPress} title="Submit offer" colorType="Pink"/>
        </div>
    );
};

export default SignUp;