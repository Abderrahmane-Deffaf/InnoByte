import React from "react";
import "./index.css";
import { createRoot } from "react-dom/client";
import Hero from "./components/hero-section/Hero";
import EventLocation from "./components/event-location/EventLocation";
import EventDate from "./components/event-date/EventDate";
import AboutBytecraft from "./components/aboutBytecraft/AboutBytecraft";
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from "react-toastify";
import NavBar from "./NavBar";
/* import AOS from "aos";
import "aos/dist/aos.css";
import Aos from "aos"; */

// const fullPageOptions = {
//   scrollSensitivity: 3,
//   touchSensitivity: 1,
//   scrollSpeed: 400, // Adjust the scroll speed as needed
//   resetSlides: true,
// };

function App() {

  return (
    <div className="container_wrapper">
      <ToastContainer/>
      <div className=" container mx-auto">
        <NavBar />
      </div>
      
      <Hero />
      <EventLocation />
      <EventDate />
      {/* <Sponsors />
      <MentorsJuries /> */}
      {/* <EventAgenda /> */}
      <AboutBytecraft />
    </div>
  );
}

const container = document.getElementById("root");
const root = createRoot(container);
root.render(<App />);
