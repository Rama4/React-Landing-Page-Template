import React, { useState, useEffect } from "react";
import "../App.css";
import 'react-calendar/dist/Calendar.css';
import {Button, Textinput} from '../components/shared';

const mockUser = {
  name: "Jason Masi",
}

const mockPerformers = [
  {
    name: 'Jason Masi',
    id: "A2"
  }
];

const mockVenues = [
  {
    name: 'Black Walnut Brewery',
    id: "V1"
  }
]

const ForgotPassword = () => {
    const [user, setUser] = useState({});
    const [performers, setPerformers] = useState([]);
    const [venues, setVenues] = useState([]);

    useEffect(()=>{
      setUser(mockUser);
      setPerformers(mockPerformers);
      setVenues(mockVenues);
    },[]);

    const onSubmitPress = () => {
      console.log("submit pressed");
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
            <h3>Forgot Password</h3>
            {renderEmailField("email", "Email Address")}
            <Button className="textinputWidth" onPress={onSubmitPress} title="Send Password Reset Link" colorType="Black"/>
        </div>
    );  
};

export default ForgotPassword;