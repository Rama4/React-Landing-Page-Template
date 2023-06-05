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

const SignUp = () => {
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
            <h2>Join {user?.name} Live</h2>
            {renderInputField("firstName", "First Name")}
            {renderInputField("lastName", "Last Name")}
            {renderEmailField("email", "Email Address")}
            {renderTermsAndConditionsCheckbox()}
            <Button className="textinputWidth" onPress={onSubmitPress} title="Submit offer" colorType="Pink"/>
        </div>
    );
};

export default SignUp;