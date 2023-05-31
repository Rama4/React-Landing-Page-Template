import React, { useState, useEffect } from "react";
import "../App.css";
import 'react-calendar/dist/Calendar.css';
import { useNavigate } from "react-router-dom";
import JsonData from "../data/data.json";


const Vendors = () => {
  const navigate = useNavigate();
  const [landingPageData, setLandingPageData] = useState([]);
  

  useEffect(()=>{
    let eventDetails = JsonData.Vendors;
    setLandingPageData(eventDetails);
    console.log(eventDetails);

  },[]);

  return (
    <div className="col-md-12 signup-form">
			<div class="container">
				<h2>Vendors</h2>
				<div id= "projects_grid" class="row">
          {
            landingPageData.map(e => {
              return (<a href={e.id} class="thumbnail col-md-3 col-sm-3 col-xs-12 project-item">
                  <p class="text-center event-card-title">{e.name}</p>
                  <img src={e.url} alt="Rubik's Cube Solver" />
                  <p class="text-center">{e.text}</p>
                </a>);
            })            
          }  
				</div>
			</div>
    </div>
  );
};

export default Vendors;