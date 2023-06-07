import React, { useState } from "react";
import "../App.css";
import 'react-calendar/dist/Calendar.css';
import {Button, Textinput, Message} from '../components/shared';
import { useNavigate } from "react-router-dom";

const AddVenue = () => {
    const navigate = useNavigate();
    const [message, setMessage] = useState("");

    const onSubmitPress = () => {
      setMessage("Venue added successfully!");
      setTimeout(()=>{
        navigate('/');
      },1500);
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
            <Message text={message} type={1}/>
            {renderInputField("name", "Venue name")}
            {renderTextArea("location", "Venue address")}
            {renderInputField("contact", "Contact person name")}
            {renderInputField("phone", "Contact person phone")}
              <Button className="textinputWidth" onPress={onSubmitPress} title="Add Venue" colorType="Blue"/>
        </div>
    );
};

export default AddVenue;