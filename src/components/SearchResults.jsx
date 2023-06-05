
import React, { useState, useEffect } from "react";
import "../App.css";
import 'react-calendar/dist/Calendar.css';
import { useParams } from "react-router-dom";
import JsonData from "../data/data.json";
import SearchResult from "./SearchResult";

const mockSearchResults = [
    "Juliana MacDowell",
    "Jason Masi",
    "Linkin Park"
]

const venueSearchResults = [

];


const SearchResults = () => {
    
      const [landingPageData, setLandingPageData] = useState({});
      const [artistSearchResults, setArtistSearchResults] = useState([]);
      const [artistData, setArtistData] = useState([]);
      
      useEffect(()=>{
        setLandingPageData(JsonData);
        setArtistSearchResults(mockSearchResults);
        for(let artist of mockSearchResults) {
          console.log(artist);
          const details = landingPageData.Artists?.find(a => {return a.name === artist;}) ?? null;
          console.log(details);
          if(details) {
              setArtistData(artistData =>[...artistData, details]);
          }
        }
        console.log(artistData);
      },[landingPageData, artistSearchResults]);

      const renderArtistSearchResults = () => {
        console.log(artistData);
        return (
          <>
            <h3>Artists</h3>
            {artistData?.map((d,i) => {
              return <SearchResult data={d}/>    
            })}
          </>
          );

      };

      const renderVenueSearchResults = () => {
        return (
          <>
            <h3>Venues</h3>
            {venueSearchResults?.map((d,i) => {
              <SearchResult />    
            })}
          </>
          );

      };




      return (
        <div className="container">
    
            <h2>Results</h2>
            {renderArtistSearchResults()}
            {renderVenueSearchResults()}
        </div>
    );        
    };
    

export default SearchResults;