import React, { useState, useEffect } from "react";
// import { useDispatch, useSelector } from "react-redux";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import Calendar from 'react-calendar';
import "../App.css";
import Select from 'react-select';
import 'react-calendar/dist/Calendar.css';
import { useNavigate } from "react-router-dom";
// import '../css/bootstrap.min.css';
// import '../css/style.css';



// import { register } from "../slices/auth";
// import { clearMessage } from "../slices/message";


const AddEvent = () => {
  const [successful, setSuccessful] = useState(false);
  const [message, setMessage] = useState("");
  const [eventDate, setEventDate] = useState(new Date());
  const [eventType, setEventType] = useState("");
  const [eventKind, setEventKind] = useState("");
  const [eventFrequency, setEventFrequency] = useState("");
  const navigate = useNavigate();



  const initialValues = {
    name: "",
    etype: "",
    frequency: "",
    date: "",
  };


    const onDateChange = (d) => {
      console.log(d);
      setEventDate(d);
    }

  const event_type_list = [
    { value: "select_event_type", label: "Select Event Type" },
    { value: "indoor", label: "Indoor" },
    { value: "outdoor", label: "Outdoor" }
  ];  
  const event_kind_list = [
      { value: "select_the_kind_of_event", label: "Select the kind of event" },
      { value: "carnivals", label: "carnivals" },
      { value: "circuses", label: "circuses" },
      { value: "festivals", label: "festivals" },
      { value: "music_fairs", label: "music fairs" },
      { value: "concerts", label: "concerts" },
      { value: "tent_revivals", label: "tent revivals" },
      { value: "art_shows", label: "art shows" },
      { value: "crafts_shows", label: "crafts shows" },
      { value: "rodeos", label: "rodeos" },
      { value: "corn_mazes", label: "corn mazes" },
      { value: "civil_war_reenactments", label: "civil war reenactments" }
    ]
    
  const event_frequency_list = [
      { value: "select_event_frequency", label: "Select Event Frequency" },
      { value: "annual_festival", label: "Annual Festival" },
      { value: "seasonal_festivals", label: "SEASONAL FESTIVALS" },
      { value: "culinary_festivals", label: "CULINARY FESTIVALS" },
      { value: "theater", label: "THEATER" },
      { value: "theme_weeks", label: "THEME WEEKS" }
    ]
    
  const handleRegister = (formValue) => {
    const { name, etype, frequency, date } = formValue;

    // setSuccessful(false);
    setSuccessful(true);
    setMessage("Event added successfully!");
    setTimeout(() => {
      navigate('/');
    }
      ,1000);

  };

  return (
    <div className="col-md-12 signup-form">
      <div className="card card-container vendorForm">
        <h4>Add Event</h4>
        <Formik
          initialValues={initialValues}
          // validationSchema={validationSchema}
          onSubmit={handleRegister}
        >
          <Form>
              <div>
                <div className="form-group">
                  <label htmlFor="username">Event Name</label>
                  <Field name="name" type="text" className="form-control" />
                  <ErrorMessage
                    name="name"
                    component="div"
                    className="alert alert-danger"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="eventtype">Event Type</label>
                  <Select
                    defaultValue={eventType}
                    onChange={setEventType}
                    options={event_type_list}
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="eventtype">Event Kind</label>
                  <Select
                    defaultValue={eventKind}
                    onChange={setEventKind}
                    options={event_kind_list}
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="eventtype">Event Frequency</label>
                  <Select
                    defaultValue={eventFrequency}
                    onChange={setEventFrequency}
                    options={event_frequency_list}
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="date">Date</label>
                  <Calendar onChange={onDateChange} value={eventDate} />
                </div>
                <div className="form-group">
                  <button type="submit" className="btn btn-block login-button">Add Event</button>
                </div>
              </div>
          </Form>
        </Formik>
        {message && (
        <div className="form-group">
          <div
            className={successful ? "alert alert-success" : "alert alert-danger"}
            role="alert"
          >
          {message}
          </div>
          </div>
        )}
      </div>


    </div>
  );
};

export default AddEvent;