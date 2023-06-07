import React, { useState, useEffect } from "react";
import "../App.css";
import 'react-calendar/dist/Calendar.css';
import {Button, Textinput} from '../components/shared';
import JsonData from "../data/data.json";
import { useNavigate } from "react-router-dom";

const AddPerformer = () => {
    const [landingPageData, setLandingPageData] = useState([]);
    const [checkedState, setCheckedState] = useState([]);
    const navigate = useNavigate();


    useEffect(()=>{
    const genresList = JsonData?.Genres ?? [];
        setLandingPageData(genresList);
        setCheckedState(new Array(genresList.length).fill(false));
    },[]);

    const onSubmitPress = () => {
      alert("Performer added successfully!");
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
            <h2>Add Performer</h2>
            <div className="bookingContainer">
              <div className="bookingLeft">
                {renderInputField("name", "Name")}
                {renderInputField("profilePic", "Profile URL")}
                {renderInputField("genres", "Genres")}
                {renderInputField("price", "Price")}
                {renderInputField("facebook", "Facebook Link")}
                {renderInputField("instagram", "Instagram Link")}
                {renderInputField("spotify", "Spotify Link")}
                {renderInputField("youtube", "Youtube Link")}
                {renderTextArea("description", "Description")}
                {renderInputField("email", "Your email")}  
              </div>
              <div className="bookingRight">
                {renderTextArea("photos", "Photo Links")}
                {renderTextArea("songs", "Song Links")}
                {renderTextArea("videos", "Video Links")}
                {renderTextArea("linke", "Links")}
                {renderTextArea("eventTypes", "Event Types")}
              </div>
            </div>
              <Button className="textinputWidth" onPress={onSubmitPress} title="Add Performer" colorType="Pink"/>
        </div>
    );
};

export default AddPerformer;