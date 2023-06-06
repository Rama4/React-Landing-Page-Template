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

const Login = () => {
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
            <h2>Join {user?.name} Live</h2>
            <h3>Login</h3>
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