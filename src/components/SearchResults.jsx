
import React, { useState, useEffect, useCallback } from "react";
import "../App.css";
import 'react-calendar/dist/Calendar.css';
import { useLocation, useSearchParams } from "react-router-dom";
import JsonData from "../data/data.json";
import SearchResult from "./SearchResult";

const venueSearchResults = [

];


const SearchResults = () => {


      const [landingPageData, setLandingPageData] = useState({});
      const [artistData, setArtistData] = useState([]);

      const {state} = useLocation();
      const [searchParams] = useSearchParams();
      const {searchString} = state ?? '';
      const genres = JSON.parse(searchParams?.get('genres') ?? '[]');
      const eventDate = searchParams?.get('eventDate') ?? null;

      const getGenre = (id) => {
        const result = JsonData.Genres.find(g => g.id === id);
        return result?.name ?? 'unknown';
      }
  
      useEffect(()=>{
                
        setLandingPageData(JsonData);
        setArtistData([]);
        const genreFilter = genres?.length > 0 ? genres.includes(true) : false;
        const searchFilter = searchString?.length > 0;
        if(!genreFilter && !searchFilter) {
          // all results
          console.log('ALL RESULTS')
          setArtistData(JsonData.Artists);
        }
        else {
            if(genreFilter) {
              genres.forEach(function (value, i) {
              if(value)
              console.log('Genres: ', getGenre(i+1));
            });
          }
          console.log("eventDate=",eventDate);
          console.log("searchString=",searchString);
          const results = JsonData.Artists?.filter((artist) => {
            const res = isMatchingFilters(artist, searchString, genres, eventDate);
            console.log(`${artist.name} => ${res}`);
            return res;
          });
          console.log("results=", results);
          if(results?.length > 0) {
            setArtistData(artistData =>[...artistData, ...results]);
            console.log("artistData=",artistData);
          }
        }
      // eslint-disable-next-line react-hooks/exhaustive-deps
      },[searchString, searchParams]);


      const isMatchingFilters = useCallback((artist, searchString, genres, eventDate) => {
        console.log("isContainsEventType",artist.name);
        const genreFilter = genres?.length > 0 ? genres.includes(true) : false;
        const searchFilter = searchString?.length > 0;


        // search by genre, if any
        if(genreFilter) {
          for(let i=0; i<genres.length; i++) {
            // if checkbox corresponding to genre was selected 
            if(genres[i]) {
              const genreId = i+1;
              if(artist.genres.includes(genreId)) {
                console.log(`Found genre ${getGenre(genreId)} for artist!`);
                return true;
              }
            }
          }
        }
        // search by date, if any
        // TODO
        // search by search bar input, if any
        if(searchFilter) {
          for(let e of artist?.eventTypes) {
            if(e.toLowerCase().includes(searchString.toLowerCase()))
            return true;
          }
        }
        return false;
      },[]);

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
              return <SearchResult />    
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