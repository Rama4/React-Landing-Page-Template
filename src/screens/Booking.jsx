import React, { useState, useEffect } from "react";
import "../App.css";
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import {Button} from '../components/shared';
import { createSearchParams, useNavigate } from "react-router-dom";
import JsonData from "../data/data.json";

const Booking = () => {
    const navigate = useNavigate();
    const [eventDate, setEventDate] = useState(new Date());
    const [landingPageData, setLandingPageData] = useState([]);
    const [checkedState, setCheckedState] = useState([]);

    useEffect(()=>{
        const genresList = JsonData?.Genres ?? [];
        setLandingPageData(genresList);
        setCheckedState(new Array(genresList.length).fill(false))
    },[]);


    const handleOnChange = (position) => {
        const updatedCheckedState = checkedState.map((item, index) =>
        index === position ? !item : item
        );

        setCheckedState(updatedCheckedState);
    };

    const onDateChange = (d) => {
      console.log("date set:", d);
      setEventDate(d);
    }

    const renderGenreSelectors =  () => {
        const leftList = landingPageData.slice(0,8);
        const rightlist = landingPageData.slice(8);
        return (
            <div className="genreCheckboxContainer">
                <div className="leftList">
            {
                leftList?.map((genre, index) => {
                    return (
                        <>
                            <div key={index}  className="bookInputRow">
                                <input 
                                    name={genre.id}
                                    type="checkbox"
                                    className="coloredBorder TNCcheckbox"
                                    checked={checkedState[index]}
                                    onChange={() => handleOnChange(index)}
                                />
                                <label id="bookInputLabel" htmlFor={genre.id} >{genre.name}</label>
                            </div>
                        </>
                    );
                })
            }
            </div>
            <div className="rightlist">
            {
                rightlist?.map((genre, index) => {
                    return (
                        <>
                            <div key={index+8}  className="bookInputRow">
                                <input 
                                    name={genre.id}
                                    type="checkbox"
                                    className="coloredBorder TNCcheckbox"
                                    checked={checkedState[index+8]}
                                    onChange={() => handleOnChange(index+8)}
                                />
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
        
        navigate({
            pathname: '/search',
            search: createSearchParams({
                genres: JSON.stringify(checkedState),
                eventDate: eventDate 
            }).toString()
        });
    }

    return (
    <div className="container">
        <div className="bookingContainer">
            <div className="bookingLeft">
                <h3>1. Select a date</h3>
                <div id="calendarContainer">
                    <Calendar id="calendar" onChange={onDateChange} value={eventDate} />
                </div>
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