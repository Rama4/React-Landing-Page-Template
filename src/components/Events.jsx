import React, { useState, useEffect } from "react";
// import { useDispatch, useSelector } from "react-redux";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import Calendar from 'react-calendar';
import "../App.css";
import Select from 'react-select';
import 'react-calendar/dist/Calendar.css';
import { useNavigate } from "react-router-dom";



// import { register } from "../slices/auth";
// import { clearMessage } from "../slices/message";


const Events = () => {
  const [successful, setSuccessful] = useState(false);
  const [message, setMessage] = useState("");
  const [eventDate, setEventDate] = useState(new Date());
  const [eventType, setEventType] = useState("");
  const [eventKind, setEventKind] = useState("");
  const [eventFrequency, setEventFrequency] = useState("");
  const navigate = useNavigate();


  const eventList = [
    {
      name: "Event 1",
      imagePath: "img/event1.jpg",
      description: "This is an event",
      date: "29 may 2023",
      url: "/",
    },
    {
      name: "Event 2",
      imagePath: "img/about.jpg",
      description: "This is an event",
      date: "29 may 2023",
      url: "/",
    },
    {
      name: "Event 1",
      imagePath: "img/event1.jpg",
      description: "This is an event",
      date: "29 may 2023",
      url: "/",
    },
    {
      name: "Event 2",
      imagePath: "img/about.jpg",
      description: "This is an event",
      date: "29 may 2023",
      url: "/",
    },
    {
      name: "Event 1",
      imagePath: "img/event1.jpg",
      description: "This is an event",
      date: "29 may 2023",
      url: "/",
    },
    {
      name: "Event 2",
      imagePath: "img/about.jpg",
      description: "This is an event",
      date: "29 may 2023",
      url: "/",
    },
    {
      name: "Event 1",
      imagePath: "img/event1.jpg",
      description: "This is an event",
      date: "29 may 2023",
      url: "/",
    },
    {
      name: "Event 2",
      imagePath: "img/about.jpg",
      description: "This is an event",
      date: "29 may 2023",
      url: "/",
    },
  ]

  return (
    <div className="col-md-12 signup-form">
			<div class="container">
				<h2>Events</h2>
				<div id= "projects_grid" class="row">
          {
            eventList.map(e => {
              return (<a href={e.url} class="thumbnail col-md-3 col-sm-3 col-xs-12 project-item">
                  <h4 class="text-center">{e.name}</h4>
                  <img src={e.imagePath} alt="Rubik's Cube Solver" />
                  <p class="text-center">{e.description}</p>
                </a>);
            })
            
          }  
				</div>
			</div>
    </div>
  );
};

export default Events;