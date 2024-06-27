import "./App.css";
import GridAnimation from "./components/GridAnimation";
import Home from "./pages/Home";
import gsap from "gsap";
import Navbar from "./components/Navbar";
import LineAnimation from "./components/LineAnimation";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect, useState } from "react";
gsap.registerPlugin(ScrollTrigger);

function App() {
  const [navbarColor, setNavbarColor] = useState("white");
  const [display, setDisplay] = useState("flex")

  useEffect(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: "#line1",
        start: "top 10%",
        end: "bottom 20%",
        onEnter: () => {setNavbarColor("black"), setDisplay("none")},
        onLeave: () => {setNavbarColor("white"),setDisplay("flex")},
        onEnterBack: () => {setNavbarColor("black"),setDisplay("none")},
        onLeaveBack: () => {setNavbarColor("white"),setDisplay("flex")},
      },
    });
  }, []);
  return (
    <>
      <div className="navbar" id="nav">
        <Navbar color={navbarColor} display={display} />
      </div>
      <div>
        <Home />
      </div>
      <div id="line1">
        <LineAnimation />
      </div>
      <div className="grid_animation">
        <GridAnimation />
      </div>
    </>
  );
}

export default App;
