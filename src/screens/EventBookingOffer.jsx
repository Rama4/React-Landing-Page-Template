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

const EventBookingOffer = () => {
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
    }

    const renderInputField = (name, label) => {
        return (
            <div className="bookInputRow">
                <Textinput name={name}  / >
                <label id="bookInputLabel" htmlFor={name}>{label}</label>
            </div>
            );
    }
    const renderTextArea = (name, label) => {
        return (
          <div className="bookInputRow">
              <Textinput rows={7} cols={42} multiline={true} name={name}  / >
              <label id="bookInputLabel" htmlFor={name}>{label}</label>
          </div>
          );
    }

    return (
        <div className="container">
            <h2>{user?.name}</h2>
            {renderInputField("date", "Date of performance")}
            {renderInputField("budget", "Budget")}
            {renderTextArea("description", "Description, location, or additional information")}
            {renderInputField("name", "Your name")}
            {renderInputField("email", "Your email")}
              <Button className="textinputWidth" onPress={onSubmitPress} title="Submit offer" colorType="Pink"/>
        </div>
    );
};

export default EventBookingOffer;