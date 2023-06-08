import React, { useState, useEffect } from "react";
import "../App.css";
import 'react-calendar/dist/Calendar.css';
import { useParams, useNavigate } from "react-router-dom";
import JsonData from "../data/data.json";
import {YoutubeIcon, InstagramIcon, SpotifyIcon, FacebookIcon, YoutubeEmbed, Button} from './shared';


const ArtistDetails = () => {
  const {x} = useParams();
  const navigate = useNavigate();
  const [landingPageData, setLandingPageData] = useState({});
  
  useEffect(()=>{
    const details = JsonData.Artists?.find(d => {return d.id === x;}) ?? null;
    console.log(details);
    setLandingPageData(details);
  },[x]);

  const getGenre = (id) => {
    const result = JsonData.Genres.find(g => g.id === id);
    return result?.name ?? '';
  }


  const onMakeAnOfferPress = () => {
    navigate('/eventbookingoffer');
  }

  const renderGenres = () => {
    
    return <div className="row">
      <ul className="genres">
      <li><h4>Genres: </h4></li>
      {landingPageData.genres?.map((gid, i) => {
        return <li><h5>{getGenre(gid)}</h5></li>;
      })}
      </ul>
    </div>
  }

  const renderPrice = () => {
    if(landingPageData.price?.length > 0) {
      return (
        <div className="row">
          <h4>Price: {landingPageData.price}</h4>
        </div>
      );
    }
    return null;
  }

  const renderPhotos = () => {
    return (<>
          <h3>Photos:</h3>
          <div id="photosContainer">
            {landingPageData.photos?.map((url,id) => {
            return <img alt="" key={id} src={url} />
          })}
          </div>
        </>
    );
  }

  const renderVideos = () => {
    return (
        <div id="videosContainer">
          <h3>Videos:</h3>
          <div id="videoContainer">
            {landingPageData.videos?.map((url,id) => {
              return <>
                <div className="videoItem">
                  <YoutubeEmbed key={id} embedId={url} />
                </div>
              </>
            })}
          </div>
      </div>
    );
  }

  const renderSongs = () => {
    
    return (
        <>
          <h3>Music:</h3>
          <ul>
          {landingPageData.songs?.map((d,id) => {
            return <li>
                <a href={d.url}>{d.description}</a>
              </li>
          })}
        </ul>
      </>
    );
  }

  const renderLinks = () => {
    return (
        <>
          <h3>Links:</h3>
          <ul>
          {landingPageData.links?.map((d,id) => {
            return <li>
                <a href={d.url}>{d.description}</a>
              </li>
          })}
        </ul>
      </>
    );
  }
  
  const renderSocialMediaLinks = () => {
    return (
      <div className="row">
        <ul className="soci">
          {landingPageData.social?.instagram?.length > 0 && <li><a href={landingPageData.social?.instagram}><InstagramIcon className="social" / ></a></li>}
          {landingPageData.social?.youtube?.length > 0 && <li><a href={landingPageData.social?.youtube}><YoutubeIcon className="social" / ></a></li>}
          {landingPageData.social?.spotify?.length > 0 && <li><a href={landingPageData.social?.spotify}><SpotifyIcon className="social" / ></a></li>}
          {landingPageData.social?.facebook?.length > 0 && <li><a href={landingPageData.social?.facebook}><FacebookIcon className="social" / ></a></li>}
        </ul>
      </div>
    );
  }

  return (
    <div className="container">
      <div className="row container" id="eventDetailContainer">
        <div className="leftColumn">
          <h2>{landingPageData.name}</h2>
          {landingPageData.profilePic && <img alt="" className="eventDetailImage" src={landingPageData?.profilePic} ></img>}
        </div>
        <div className="container rightColumn">
            {renderGenres()}
            {renderPrice()}
            {renderSocialMediaLinks()}  
            <Button title="Make an offer" colorType="Pink" onPress={onMakeAnOfferPress}></Button>
        </div>
      </div>
      <div className="row">
        <p id="artistDetailsText">{landingPageData.description}</p>
      </div>
      <div className="row">
        {renderPhotos()}
      </div>
      <div className="row" id="eventDetailContainer">
      {/* <div className="row container"> */}
        <div className="leftColumn">
          {renderSongs()}
          {renderLinks()}
        </div>
        <div className="rightColumn">
          {renderVideos()}  
        </div>
      </div>
    </div>
);        
};

export default ArtistDetails;