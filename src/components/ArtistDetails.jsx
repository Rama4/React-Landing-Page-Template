import React, { useState, useEffect } from "react";
import "../App.css";
import 'react-calendar/dist/Calendar.css';
import { useParams } from "react-router-dom";
import JsonData from "../data/data.json";
import FacebookIcon from './shared/FacebookIcon';
import InstagramIcon from "./shared/InstagramIcon";
import SpotifyIcon from "./shared/SpotifyIcon";
import YoutubeIcon from "./shared/YoutubeIcon";


const ArtistDetails = () => {
  const {x} = useParams();
  const [landingPageData, setLandingPageData] = useState({});
  
  useEffect(()=>{
    let details = {};
    details = JsonData.Artists?.find(d => {return d.id === x;}) ?? null;
    console.log(details);
    setLandingPageData(details);
  },[x]);

  const getGenresString = () => {
    
    return <div className="row">
      <ul className="genres">
      <li>Genres:</li>
      {landingPageData.genres?.map((g, i) => {
        return <li>{g}</li>;
      })}
      </ul>
    </div>
  }

  return (
    <div className="container">

    <div className="row" id="eventDetailContainer">
      <div id="leftColumn">
        <h3>{landingPageData.name}</h3>
        {landingPageData.profilePic && <img className="eventDetailImage" src={landingPageData?.profilePic} ></img>}
      </div>
      <div className="container" id="rightColumn">
            {getGenresString()}
          <div>
          {landingPageData.price?.length > 0 && <p>Price: {landingPageData.price}</p> }

          <div class="row">
						<ul class="soci">
							{landingPageData.social?.instagram?.length > 0 && <li><a href={landingPageData.social?.instagram}><InstagramIcon className="social" / ></a></li>}
              {landingPageData.social?.youtube?.length > 0 && <li><a href={landingPageData.social?.youtube}><YoutubeIcon className="social" / ></a></li>}
              {landingPageData.social?.spotify?.length > 0 && <li><a href={landingPageData.social?.spotify}><SpotifyIcon className="social" / ></a></li>}
							{landingPageData.social?.facebook?.length > 0 && <li><a href={landingPageData.social?.facebook}><FacebookIcon className="social" / ></a></li>}
						 </ul>
          </div>
          </div>
          <div>

          <p id="eventDetailsText">{landingPageData.text}</p>        
          </div>
      </div>
    </div>
    </div>
);        
};

export default ArtistDetails;