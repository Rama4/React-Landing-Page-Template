import React, { useState, useEffect } from "react";
import { Formik, Field, Form, ErrorMessage } from "formik";
import Calendar from 'react-calendar';
import "../App.css";
import Select from 'react-select';
import 'react-calendar/dist/Calendar.css';
import { useNavigate } from "react-router-dom";

const AddVendor = () => {
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
      <h4>Add Vendor</h4>
      <p>
      The City events department accepts vendors on a per-event basis.  Applications are sent out prior to each event and vendors are accepted on a first come, first serve basis.  The City events department reserves the right to refuse any vendor at any time for any reason. Please check the individual event page on this website for current applications. 
      To become a food vendor with the City events department you must submit a food vendor application and supporting documentation once and then apply for each individual event.  Food vendor application must be submitted complete with all supporting documentation to be accepted. 
      </p>        
        <Formik
          initialValues={initialValues}
          // validationSchema={validationSchema}
          onSubmit={handleRegister}
        >
          <Form>
              <div>
                <div className="form-group">
                  <label htmlFor="username">Vendor Name</label>
                  <Field name="name" type="text" className="form-control" />
                  <ErrorMessage
                    name="name"
                    component="div"
                    className="alert alert-danger"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="username">Vendor Description</label>
                  <Field name="text" type="text" className="form-control" />
                  <ErrorMessage
                    name="text"
                    component="div"
                    className="alert alert-danger"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="eventtype">Vendor Phone</label>
                  <Field name="phone" type="text" className="form-control" />
                  <ErrorMessage
                    name="phone"
                    component="div"
                    className="alert alert-danger"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="eventtype">Vendor website link</label>
                  <Field name="url" type="text" className="form-control" />
                  <ErrorMessage
                    name="url"
                    component="div"
                    className="alert alert-danger"
                  />
                </div>

                <div className="form-group">
                  <button type="submit" className="btn btn-block login-button">Add Vendor</button>
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

export default AddVendor;