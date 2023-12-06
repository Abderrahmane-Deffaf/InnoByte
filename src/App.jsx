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
import ScrollRevealComponent from "./components/ScrollRevealComp";
/* import AOS from "aos";
import "aos/dist/aos.css";
import Aos from "aos"; */
//import AOS from "aos";
//import "aos/dist/aos.css"; // You can also use <link> for styles
// ..

// const fullPageOptions = {
//   scrollSensitivity: 3,
//   touchSensitivity: 1,
//   scrollSpeed: 400, // Adjust the scroll speed as needed
//   resetSlides: true,
// };
/* AOS.init({
  // Global settings:
  disable: false, // accepts following values: 'phone', 'tablet', 'mobile', boolean, expression or function
  startEvent: "DOMContentLoaded", // name of the event dispatched on the document, that AOS should initialize on
  initClassName: "aos-init", // class applied after initialization
  animatedClassName: "aos-animate", // class applied on animation
  useClassNames: false, // if true, will add content of `data-aos` as classes on scroll
  disableMutationObserver: false, // disables automatic mutations' detections (advanced)
  debounceDelay: 50, // the delay on debounce used while resizing window (advanced)
  throttleDelay: 99, // the delay on throttle used while scrolling the page (advanced)

  // Settings that can be overridden on per-element basis, by `data-aos-*` attributes:
  offset: 120, // offset (in px) from the original trigger point
  delay: 0, // values from 0 to 3000, with step 50ms
  duration: 400, // values from 0 to 3000, with step 50ms
  easing: "ease", // default easing for AOS animations
  //once: false, // whether animation should happen only once - while scrolling down
  mirror: false, // whether elements should animate out while scrolling past them
  anchorPlacement: "top-bottom", // defines which position of the element regarding to window should trigger the animation
}); */

function App() {
  /* useEffect(() => {
    AOS.init();
    AOS.init({
      duration: 800,
      once: true,
    });
  }, []);
  const [offsetX, setOffsetX] = useState(0);
  const [offsetY, setOffsetY] = useState(0);
  useEffect(() => {
    const cursor = document.getElementById("cursor-glow");
    const updateCursorPosition = () => {
      cursor.style.transform = `translate(-50%, -50%) translate(${offsetX}px, ${offsetY}px)`;
      requestAnimationFrame(updateCursorPosition);
    };
    document.addEventListener("mousemove", (e) => {
      setOffsetX(e.pageX);
      setOffsetY(e.pageY);
    });
    updateCursorPosition();

    return () => {
      document.removeEventListener("mousemove", () => {});
    };
  }, [offsetX, offsetY]); */
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
      {/* <Slide> */}
      {/* <Hero /> */}
      {/* </Slide> */}

      {/* <Slide> */}

      {/* <div data-aos="fade-in">
      </div> */}
        <EventLocation />

      {/* <ScrollRevealComponent>
      </ScrollRevealComponent> */}
      {/* </Slide> */}

      {/* <Slide> */}
      <EventDate />
      {/* </Slide> */}

      {/* <Slide> */}
      <Sponsors />
      {/* </Slide> */}

      {/* <Slide> */}
      <MentorsJuries />
      {/* </Slide> */}

      {/* <Slide> */}
      <EventAgenda />
      {/* </Slide> */}

      {/* <Slide> */}
      <AboutBytecraft />
      {/* </Slide> */}
    </div>
  );
}

const container = document.getElementById("root");
const root = createRoot(container);
root.render(<App />);
