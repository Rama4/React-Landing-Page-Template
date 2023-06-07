import React, { useState, useEffect } from "react";
import "../App.css";
import 'react-calendar/dist/Calendar.css';
import {Button, Textinput} from '../components/shared';
import { useNavigate } from "react-router-dom";


const ForgotPassword = () => {
    const navigate = useNavigate();

    const onSubmitPress = () => {
      console.log("submit pressed");
    };
    
    const onCancelPress = () => {
      navigate(-1);
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
            <h3>Forgot Password</h3>
            {renderEmailField("email", "Email Address")}
            <Button className="textinputWidth verticalSpace" onPress={onSubmitPress} title="Send Password Reset Link" colorType="Black"/>
            <Button className="textinputWidth" onPress={onCancelPress} title="Cancel" />
        </div>
    );  
};

export default ForgotPassword;