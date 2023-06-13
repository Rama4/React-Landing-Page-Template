import { BrowserRouter as Router, Routes, Route, useNavigate } from 'react-router-dom';
import { Navigation } from "./components/navigation";
import SmoothScroll from "smooth-scroll";
import "./App.css";
import Events from "./components/Events";
import Vendors from "./components/Vendors";
import { useState } from 'react';
import ArtistDetails from './components/ArtistDetails';
import {EventOrganizerWelcome, EventBookingOffer, SignUp, Booking, Login, About, AccountSettings, ForgotPassword, AddVenue, AddPerformer} from './screens';
import SearchResults from './components/SearchResults';
import Navbar from './components/navbar/Navbar';

export const scroll = new SmoothScroll('a[href*="#"]', {
  speed: 1000,
  speedAsDuration: true,
});

const basename = process.env.PUBLIC_URL || '/';

console.log("PUBLIC_URL=", process.env.PUBLIC_URL);

const App = () => {
  const [isShowLogin, setIsShowLogin] = useState(false);
  const [loginCallbackURL, setLoginCallbackURL] = useState("/");
  const doShowL
  ogin = (val) => {
    console.log("doShowLogin", val);
    setIsShowLogin(true);
    setLoginCallbackURL(val);
    console.log("loginCallbackURL=", loginCallbackURL); 
  }

  return (
    <Router basename={basename}>
      <Navbar />
      <Routes>
        <Route exact path='/' element={< Booking/>} />
        <Route path='/eventOrganizer' element={< EventOrganizerWelcome/>} />
        <Route path='/account' element={< AccountSettings/>} />
        <Route path='/forgotPassword' element={< ForgotPassword/>} />
        <Route path='/about' element={< About/>} />
        <Route path='/search' element={< SearchResults/>} />
        <Route path='/signup' element={< SignUp/>} />
        <Route path='/login' element={< Login/>} />
        <Route path='/events' element={< Events/>} />
        <Route path='/vendors' element={< Vendors/>} />
        <Route path='/addPerformer' element={< AddPerformer/>} />
        <Route path='/addVenue' element={< AddVenue />} />
        <Route path='/eventbookingoffer' element={< EventBookingOffer/>} />
        <Route path='/:x' element={< ArtistDetails/>} />
      </Routes>
    </Router>
  );
};

export default App;
