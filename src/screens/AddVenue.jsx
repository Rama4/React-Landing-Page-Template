import React, { useState, useEffect } from "react";
import "../App.css";
import 'react-calendar/dist/Calendar.css';
import {Button, Textinput} from '../components/shared';
import { useNavigate } from "react-router-dom";


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

const AddVenue = () => {
    const navigate = useNavigate();
    const [user, setUser] = useState({});
    const [performers, setPerformers] = useState([]);
    const [venues, setVenues] = useState([]);

    useEffect(()=>{
    setUser(mockUser);
    setPerformers(mockPerformers);
    setVenues(mockVenues);
    },[]);

    const onSubmitPress = () => {
      alert("Venue added successfully!");
      navigate('/');
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
            <h2>Add Venue</h2>
            {renderInputField("name", "Venue name")}
            {renderTextArea("location", "Venue address")}
            {renderInputField("contact", "Contact person name")}
            {renderInputField("phone", "Contact person phone")}
              <Button className="textinputWidth" onPress={onSubmitPress} title="Add Venue" colorType="Blue"/>
        </div>
    );
};

export default AddVenue;