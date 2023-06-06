import { BrowserRouter as Router, Routes, Route, useNavigate } from 'react-router-dom';
import { Navigation } from "./components/navigation";
import SmoothScroll from "smooth-scroll";
import "./App.css";
import Home from "./screens/Home";
import Events from "./components/Events";
import AddEvent from "./components/AddEvent";
import AddVendor from "./components/AddVendor";
import EventDetails from "./components/EventDetails";
import Vendors from "./components/Vendors";
// import Login from './components/Login';
import { useState } from 'react';
import ArtistDetails from './components/ArtistDetails';
import {EventOrganizerWelcome, EventBookingOffer, SignUp, Booking, Login, About, AccountSettings, ForgotPassword} from './screens';
import SearchResults from './components/SearchResults';

export const scroll = new SmoothScroll('a[href*="#"]', {
  speed: 1000,
  speedAsDuration: true,
});

const App = () => {
  const [isShowLogin, setIsShowLogin] = useState(false);
  const [loginCallbackURL, setLoginCallbackURL] = useState("/");
  const doShowLogin = (val) => {
    console.log("doShowLogin", val);
    setIsShowLogin(true);
    setLoginCallbackURL(val);
    console.log("loginCallbackURL=", loginCallbackURL); 
  }

  return (
    <Router>
      <Navigation doShowLogin={doShowLogin} />
      <Routes>
        <Route path='/' element={< EventOrganizerWelcome/>} />
        <Route path='/account' element={< AccountSettings/>} />
        <Route path='/forgotPassword' element={< ForgotPassword/>} />
        <Route path='/about' element={< About/>} />
        <Route path='/booking' element={< Booking/>} />
        <Route path='/search' element={< SearchResults/>} />
        <Route path='/signup' element={< SignUp/>} />
        <Route path='/login' element={< Login/>} />
        <Route path='/events' element={< Events/>} />
        <Route path='/vendors' element={< Vendors/>} />
        <Route path='/addEvent' element={< AddEvent/>} />
        <Route path='/addVendor' element={< AddVendor/>} />
        <Route path='/eventbookingoffer' element={< EventBookingOffer/>} />
        {/* <Route path='/eventorganizerwelcome' element={< EventOrganizerWelcome/>} /> */}
        <Route path='/:x' element={< ArtistDetails/>} />
      </Routes>
    </Router>
  );
};

export default App;
