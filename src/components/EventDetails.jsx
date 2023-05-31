import React, { useState, useEffect } from "react";
// import { useDispatch, useSelector } from "react-redux";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import Calendar from 'react-calendar';
import "../App.css";
import Select from 'react-select';
import 'react-calendar/dist/Calendar.css';
import { useNavigate, useParams } from "react-router-dom";
import JsonData from "../data/data.json";




// import { register } from "../slices/auth";
// import { clearMessage } from "../slices/message";


const EventDetails = () => {
  const navigate = useNavigate();
  const {x} = useParams();
  const [landingPageData, setLandingPageData] = useState({});
  


  useEffect(()=>{
    // alert(x);
    console.log("event name=", x);
    let eventDetails = JsonData.Services?.find(d => {return d.id == x;}) ?? null;
    setLandingPageData(eventDetails);
    console.log(landingPageData);

  },[]);

  return (
    <>
    {/* {
      landingPageData && ( */}
        <div className="jumbotron">
          <div className="container">
          <h3>{landingPageData.name}</h3>
          <img className="eventDetailImage" src={landingPageData.smallImage} ></img>
          <p>{landingPageData.date}</p>        
          <p>{landingPageData.time}</p>        
          <p>{landingPageData.text}</p>        
          </div>
        </div>
        
      {/* ) */}
    {/* } */}
    </>);
};

export default EventDetails;