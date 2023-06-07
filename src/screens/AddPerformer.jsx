import React, { useState, useEffect } from "react";
import "../App.css";
import 'react-calendar/dist/Calendar.css';
import {Button, Textinput, Message} from '../components/shared';
import JsonData from "../data/data.json";
import { useNavigate } from "react-router-dom";

const AddPerformer = () => {
    const navigate = useNavigate();
    const [landingPageData, setLandingPageData] = useState([]);
    const [message, setMessage] = useState("");

    useEffect(()=>{
    const genresList = JsonData?.Genres ?? [];
        setLandingPageData(genresList);
    },[]);

    const onSubmitPress = () => {
      setMessage("Performer added successfully!");
      setTimeout(()=>{
        navigate('/');
      },1500);
    }

    const onCancelPress = () => {
      navigate(-1);
    };

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
            <Message text={message} type={1}/>
            <div className="bookingContainer">
              <div className="bookingLeft">
                {renderInputField("name", "Name")}
                {renderInputField("profilePic", "Profile URL")}
                {renderInputField("genres", "Genres ex: Rock, Pop, etc.")}
                {renderInputField("price", "Price ex: $, $$, $$$, etc.")}
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
                {renderTextArea("links", "Other Links ")}
                {renderTextArea("eventTypes", "Event Types  ex: Sweet Sixteen, Wedding, etc.")}
              </div>
            </div>
              <Button className="textinputWidth verticalSpace" onPress={onSubmitPress} title="Add Performer" colorType="Pink"/>
              <Button className="textinputWidth" onPress={onCancelPress} title="Cancel" />
        </div>
    );
};

export default AddPerformer;