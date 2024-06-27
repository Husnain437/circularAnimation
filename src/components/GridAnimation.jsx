import { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);
const GridAnimation = () => {
  useEffect(() => {
    if(window.innerWidth> 800){
      var horizontalTL = gsap.timeline({
        scrollTrigger: {
          trigger: ".gr",
          start: "top 50%",
          end: "bottom 20%",
          toggleActions: "play none none none",
        },
      });
      var horizontalTL2 = gsap.timeline({
        scrollTrigger: {
          trigger: ".gr",
          start: "top 50%",
          end: "bottom 20%",
          toggleActions: "play none none none",
        },
      });
      var verticalTL = gsap.timeline({
        scrollTrigger: {
          trigger: ".gr",
          start: "top 50%",
          end: "bottom 20%",
          toggleActions: "play none none none",
        },
      });
      var verticalTL2 = gsap.timeline({
        scrollTrigger: {
          trigger: ".gr",
          start: "top 50%",
          end: "bottom 20%",
          toggleActions: "play none none none",
        },
      });
      horizontalTL.fromTo(
        "#b1",
        { width: "50px" },
        { width: "45%", duration: 1 }
      );
      horizontalTL.fromTo(
        "#p1",
        { y: 100, opacity: 0 },
        { y: 0, delay: 1, opacity: 1 }
      );
  
      horizontalTL.fromTo(
        "#bot2",
        { transform: "scaleX(0)", transformOrigin: "left" },
        { transform: "scaleX(1)", duration: 0.5, delay: 0.5 },
        0
      );
      horizontalTL.fromTo(
        "#bot3",
        { transform: "scaleX(0)", transformOrigin: "left" },
        { transform: "scaleX(1)", duration: 0.5, delay: 0.5 },
        1
      );
  
      horizontalTL2.fromTo(
        "#bot4",
        { transform: "scaleX(0)", transformOrigin: "left" },
        { transform: "scaleX(1)", duration: 0.5, delay: 0.5 }
      );
      horizontalTL2.fromTo(
        "#bot5",
        { transform: "scaleX(0)", transformOrigin: "left" },
        { transform: "scaleX(1)", duration: 0.5, delay: 0.5 },
        "<"
      );
      horizontalTL2.fromTo(
        "#bot6",
        { transform: "scaleX(0)", transformOrigin: "left" },
        { transform: "scaleX(1)", duration: 0.5, delay: 0.5 },
        "<"
      );
  
      verticalTL.fromTo(
        "#r1",
        { transform: "scaleY(0)", transformOrigin: "top" },
        { transform: "scaleY(1)", duration: 0.5, delay: 0.5 }
      );
      verticalTL.fromTo(
        "#r4",
        { transform: "scaleY(0)", transformOrigin: "top" },
        { transform: "scaleY(1)", duration: 0.5, delay: 0.5 },
        "<"
      );
      verticalTL.fromTo(
        "#r7",
        { transform: "scaleY(0)", transformOrigin: "top" },
        { transform: "scaleY(1)", duration: 0.5, delay: 0.5 },
        "<"
      );
      verticalTL2.fromTo(
        "#r2",
        { transform: "scaleY(0)", transformOrigin: "top" },
        { transform: "scaleY(1)", duration: 0.5, delay: 0.5 }
      );
      verticalTL2.fromTo(
        "#r5",
        { transform: "scaleY(0)", transformOrigin: "top" },
        { transform: "scaleY(1)", duration: 0.5, delay: 0.5 },
        "<"
      );
      verticalTL2.fromTo(
        "#r8",
        { transform: "scaleY(0)", transformOrigin: "top" },
        { transform: "scaleY(1)", duration: 0.5, delay: 0.5 },
        "<"
      );
    }
    
  });
  return (
    <div className="gr">
      <div className="card">
        {/* <div className="border-bot" id="bot1"></div>
        <div className="border-right" id="r1"></div> */}
      </div>
      <div className="card">
        <div className="border-bot" id="bot2"></div>
        <div className="border-right" id="r2"></div>
      </div>
      <div className="card">
        <div className="border-bot" id="bot3"></div>
        Card3
      </div>
      <div className="card">
        <div className="border-bot" id="bot4"></div>
        <div className="border-right" id="r4"></div>
        <div className="card-content">
          <p className="txt">
            Lorem ipsum is placeholder text commonly used in the graphic, print,
            and publishing industries for previewing layouts and visual mockups
          </p>
          <div className="btn-flex">
            <button className="bl-btn" id="b1">
              {" "}
              <p id="p1">Book your Stay</p>
            </button>
            <button className="trans-btn" id="b1">
              <p id="p1">Contact us</p>
            </button>
          </div>
        </div>
      </div>
      <div className="card">
        <div className="border-bot" id="bot5"></div>
        <div className="border-right" id="r5"></div>
        Card5
      </div>
      <div className="card">
        <div className="border-bot" id="bot6"></div>
        Card6
      </div>
      <div className="card">
        <div className="border-right" id="r7"></div>
        Card7
      </div>
      <div className="card">
        <div className="border-right" id="r8"></div>
        Card8
      </div>
      <div className="card">Card9</div>
    </div>
  );
};

export default GridAnimation;
