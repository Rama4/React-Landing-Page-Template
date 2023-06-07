import React, { useState, useEffect } from "react";
import "../App.css";
import 'react-calendar/dist/Calendar.css';
import { useNavigate } from "react-router-dom";
import {Button} from '../components/shared';

const mockUser = {
  name: "Jack",
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


const EventOrganizerWelcome = () => {
  // const {x} = useParams();
  const navigate = useNavigate();
  const [user, setUser] = useState({});
  const [performers, setPerformers] = useState([]);
  const [venues, setVenues] = useState([]);

  useEffect(()=>{
    setUser(mockUser);
    setPerformers(mockPerformers);
    setVenues(mockVenues);
  //   let details = {};
  //   if(x >= 100) {
  //     details = JsonData.Vendors?.find(d => {return d.id === x;}) ?? null;
  //   }
  //   else {
  //     details = JsonData.Events?.find(d => {return d.id === x;}) ?? null;
  //   }
  //   console.log(details);
  //   setLandingPageData(details);
  },[]);


  const onCreatePerformerPress = () => {
    navigate('/addPerformer');
  }
  const onCreateVenuePress = () => {
    navigate('/addVenue');
  }

  

  const renderPerformers = () => {
    return (
      <ul>
        {
          performers?.map((p,i) => {
            return <li><a key={i} href={p.id} className="pinkText">{p.name}</a></li>
          })
        }
      </ul>
    );
  }
  const renderVenues = () => {
    return (
      <ul>
        {
          venues?.map((p,i) => {
            return <li><a key={i} href={p.id} className="blueText">{p.name}</a></li>
          })
        }
      </ul>
    );
  }

  return (
    <div className="container">

    <div className="row" id="eventDetailContainer">
      <div className="leftColumn">
        <h2>Welcome, {user?.name}!</h2>
        <h3>Manage my Pages</h3>
        {renderPerformers()}
        {renderVenues()}
      </div>
      <div className="rightColumn">
          <div>
            <div className="welcomeButton">
                <Button onPress={onCreatePerformerPress} title="Create a Performer Page" colorType="Pink"/>
            </div>
            <div className="welcomeButton">
                <Button onPress={onCreateVenuePress} title="Create a Venue Page" colorType="Blue"/>
            </div>
          </div>

          </div>
      </div>
    </div>
);        
};

export default EventOrganizerWelcome;