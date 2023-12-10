import React from "react";
import "./index.css";
import { createRoot } from "react-dom/client";
import Hero from "./components/hero-section/Hero";
import EventLocation from "./components/event-location/EventLocation";
import EventDate from "./components/event-date/EventDate";
import AboutBytecraft from "./components/aboutBytecraft/AboutBytecraft";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import NavBar from "./NavBar";
import MentorsJuries from "./components/mentors & juries/MentorsJuries";
import Sponsors from "./components/sponsors/Sponsors";


function App() {
  return (
    <div className="container_wrapper ">
      <ToastContainer />
      <div className=" container mx-auto">
        <NavBar />
      </div>

      <Hero />
      <EventLocation />
      <EventDate />
      {/*
       */}
      <MentorsJuries />
      <Sponsors/>
      {/* <EventAgenda /> */}
      <AboutBytecraft />
    </div>
  );
}

const container = document.getElementById("root");
const root = createRoot(container);
root.render(<App />);
