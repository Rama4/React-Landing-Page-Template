import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Navigation } from "./components/navigation";
import SmoothScroll from "smooth-scroll";
import "./App.css";
import Home from "./screens/Home";
import Events from "./components/Events";
import AddEvent from "./components/AddEvent";
import AddVendor from "./components/AddVendor";
import EventDetails from "./components/EventDetails";
import Vendors from "./components/Vendors";

export const scroll = new SmoothScroll('a[href*="#"]', {
  speed: 1000,
  speedAsDuration: true,
});

const App = () => {

  return (
    <Router>
      <Navigation />
      <Routes>
        <Route path='/' element={< Home/>} />
        <Route path='/events' element={< Events/>} />
        <Route path='/vendors' element={< Vendors/>} />
        <Route path='/addEvent' element={< AddEvent/>} />
        <Route path='/addVendor' element={< AddVendor/>} />
        <Route path='/:x' element={< EventDetails/>} />
      </Routes>
    </Router>
  );
};

export default App;
