
import React, { useState, useEffect } from "react";
import "../App.css";
import 'react-calendar/dist/Calendar.css';
import { useNavigate } from "react-router-dom";
import JsonData from "../data/data.json";
import Button from './shared/Button';


const SearchResult = ({data}) => {
    
      const [landingPageData, setLandingPageData] = useState({});
      const navigate = useNavigate();
      
      useEffect(()=>{
        console.log("Search Result");
        setLandingPageData(JsonData);
        console.log(data);
      },[data]);
      
      
    const onMakeAnOfferPress = () => {
      navigate('/' + data.id);
    }

      return (
        <>
          <div className="searchResult">
            <img className="profilePic" src={data.profilePic} alt="" />
            <div className="artistInfo">
              <h4>{data.name}</h4>
              <p>{data.description}</p>
            </div>
            <Button title="View Profile/Book" colorType="Pink" onPress={onMakeAnOfferPress}></Button>
          </div>
        </>
    );        
    };
    

export default SearchResult;