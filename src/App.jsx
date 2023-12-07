import React from "react";
import "./index.css";
import { createRoot } from "react-dom/client";
//import Hero from "./components/hero-section/Hero";
import EventLocation from "./components/event-location/EventLocation";
import EventAgenda from "./components/event-agenda/EventAgenda";
import EventDate from "./components/event-date/EventDate";
import Sponsors from "./components/sponsors/Sponsors";
import MentorsJuries from "./components/mentors & juries/MentorsJuries";
import AboutBytecraft from "./components/aboutBytecraft/AboutBytecraft";

function App() {

  return (
    <div className="container_wrapper">
      <div className="min-h-screen section bg-gray-900 flex flex-col items-center justify-center">
        <h1 className="text-5xl text-white font-bold mb-8 animate-pulse">
          Coming Soon
        </h1>
        <p className="text-white text-lg mb-8">
          We're working hard to bring you something amazing. Stay tuned!
        </p>
      </div>
      {/* <Hero /> */}
      <EventLocation />
      <EventDate />
      <Sponsors />
      <MentorsJuries />
      <EventAgenda />
      <AboutBytecraft />
    </div>
  );
}

const container = document.getElementById("root");
const root = createRoot(container);
root.render(<App />);
