import React, { useState, useEffect } from "react";
import "../App.css";
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import {Button, Textinput} from '../components/shared';
import { useParams, useNavigate } from "react-router-dom";
import JsonData from "../data/data.json";

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

const Booking = () => {
    const navigate = useNavigate();
    const [user, setUser] = useState({});
    const [performers, setPerformers] = useState([]);
    const [venues, setVenues] = useState([]);
    const [eventDate, setEventDate] = useState(new Date());
    const [landingPageData, setLandingPageData] = useState([]);



    useEffect(()=>{
    setUser(mockUser);
    setPerformers(mockPerformers);
    setVenues(mockVenues);
    const details = JsonData.Genres;
    setLandingPageData(details);

    },[]);

    const onSubmitPress = () => {
      console.log("submit pressed");
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
    
    const onDateChange = (d) => {
      console.log(d);
      setEventDate(d);
    }

    const renderGenreSelectors =  () => {
        const leftList = landingPageData.slice(0,8);
        const rightlist = landingPageData.slice(8);
        return (
            <div className="genreCheckboxContainer">
                <div className="leftList">

            {
                leftList?.map((genre, id) => {
                    return (
                        <>
                            <div key={id}  className="bookInputRow">
                                <input name={genre.id} type="checkbox" className="coloredBorder TNCcheckbox" />
                                <label id="bookInputLabel" htmlFor={genre.id} >{genre.name}</label>
                            </div>
                        </>
                    );
                })
            }
            </div>
            <div className="rightlist">
            {
                rightlist?.map((genre, id) => {
                    return (
                        <>
                            <div key={id}  className="bookInputRow">
                                <input name={genre.id} type="checkbox" className="coloredBorder TNCcheckbox" />
                                <label id="bookInputLabel" htmlFor={genre.id} >{genre.name}</label>
                            </div>
                        </>
                    );
                })
            }
            </div>
            </div>
        );
    }

    const onFindAPerformerPress = () => {
        navigate('/search');
    }



    return (
    <div className="container">
        <div className="bookingContainer">
            <div className="bookingLeft">
                <h3>1. Select a date</h3>
                <Calendar onChange={onDateChange} value={eventDate} />
            </div>
            <div className="bookingRight">
                <h3>2. Select a genre</h3>
                {renderGenreSelectors()}
                <Button title="3. Find a performer" colorType="Pink" onPress={onFindAPerformerPress}></Button>                
            </div>  
        </div>
    </div>
    );
};

export default Booking;