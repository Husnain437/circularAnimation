import { useEffect } from "react";
import banner from "../assets/banner.jpg";
import gsap from "gsap";

const Home = () => {
  useEffect(() => {
    var tl = gsap.timeline();
    var tl2 = gsap.timeline();
    var tl3 = gsap.timeline();
    var textanimation = gsap.timeline();
    textanimation.from(".word", {
      y: 100,
      stagger: {
        each: 0.05,
      },
    });
    tl.fromTo(
      "#ban",
      { width: "0%", scale: 0 },
      { width: "50%", height: "50%", duration: 1.5, delay: 1, scale: 1 }
    );
    tl.fromTo(
      "#ban",
      { width: "50%", height: "50%" },
      { width: "100%", height: "100%", delay: 1.5, duration: 1.5 },
      "<"
    );
    tl.fromTo("#nav", { width: "0%", scale: 0 }, { width: "100%", scale: 1 });
    tl.fromTo(
      "#btn1",
      { scale: 0, width: "40px", overflow: "hidden", opacity: 0, x: -100 },
      { scale: "1", width: "200px", opacity: 1, x: 0, duration: 0.5 },
      4
    );
    tl.fromTo(
      "#ht",
      { scale: 0, overflow: "hidden", opacity: 0, y: 100 },
      { scale: "1", opacity: 1, y: 0, duration: 0.5 },
      4
    );

    tl2.fromTo(
      "#tx",
      { y: "100%", x: "8%", opacity: 0 },
      {
        y: "150",
        x: "3%",
        delay: 1,
        duration: 3,
        ease: "power3.out",
        opacity: 1,
      }
    );
    tl3.fromTo(
      "#t2",
      { y: "100%", opacity: 0 },
      {
        y: "200",
        x: "-3%",
        opacity: 1,
        delay: 2,
        duration: 1,
        ease: "power3.out",
      }
    );
  }, []);
  return (
    <>
      <div className="banner">
        <div className="banner-div">
          <img className="banner-img" src={banner} alt="banenr" id="ban" />
          <div className="text">
            <div className=" left-text larg-font" id="tx">
              OrnaVillas <br/> Living
             
            </div>
            <div className="home-text" id="ht">
              Lorem et tempor eu veniam enim. Commodo amet tempor eiusmod
              nostrud. Labore anim minim aliqua minim tempor. Est velit aute
              adipisicing proident tempor nostrud occaecat laborum et.
            </div>
            <button className="btn" id="btn1">
              Book your stay
            </button>
            <div className="right-text larg-font t2" id="t2">
              Experiences
            </div>
          </div>
        </div>
      </div>
      
    </>
  );
};

export default Home;
