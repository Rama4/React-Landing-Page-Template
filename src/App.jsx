import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Navigation } from "./components/navigation";
import SmoothScroll from "smooth-scroll";
import "./App.css";
import Home from "./screens/Home";
import AddEvent from "./components/AddEvent";
import Events from "./components/Events";
import EventDetails from "./components/EventDetails";

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
        <Route path='/addEvent' element={< AddEvent/>} />
        <Route path='/:x' element={< EventDetails/>} />
      </Routes>
    </Router>
  );
};

export default App;
