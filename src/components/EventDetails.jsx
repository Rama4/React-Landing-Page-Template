import React, { useState, useEffect } from "react";
import "../App.css";
import 'react-calendar/dist/Calendar.css';
import { useParams } from "react-router-dom";
import JsonData from "../data/data.json";


const EventDetails = () => {
  const {x} = useParams();
  const [landingPageData, setLandingPageData] = useState({});
  
  useEffect(()=>{
    let details = {};
    if(x >= 100) {
      details = JsonData.Vendors?.find(d => {return d.id === x;}) ?? null;
    }
    else {
      details = JsonData.Events?.find(d => {return d.id === x;}) ?? null;
    }
    console.log(details);
    setLandingPageData(details);
  },[x]);
  return (
    <div className="container">

    <div className="row" id="eventDetailContainer">
      <div className="leftColumn">
        <h3>{landingPageData.name}</h3>
        {landingPageData.imageurl && <img alt="" className="eventDetailImage" src={landingPageData?.imageurl} ></img>}
      </div>
      <div className="container rightColumn">
          <div>
          {landingPageData.date && <p>Date: {landingPageData.date}</p> }
          {landingPageData.time && <p>Time: {landingPageData.time}</p> }
          </div>
          <div>
          {landingPageData.phone && <p>Phone: {landingPageData.phone}</p> }
          {landingPageData.url && <a href={landingPageData.url}>Visit here for more details</a> }
          </div>
          <div>

          <p id="eventDetailsText">{landingPageData.text}</p>        
          </div>
      </div>
    </div>
    </div>
);        
};

export default EventDetails;