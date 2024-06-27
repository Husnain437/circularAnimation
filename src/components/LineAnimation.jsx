import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import "../App.css";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const LineAnimation = () => {
  const details = [
    {
      name: "Asprato Loia",
      place: "Las Wagas",
      count: "1",
      img: "https://i.pinimg.com/736x/7f/49/bc/7f49bc6e6f06b14a8398734716b91982.jpg",
      cords: ["10", "42", "17"],
    },
    {
      name: "Lady Bird",
      place: "Los Angeles",
      count: "2",
      img: "https://i.pinimg.com/736x/09/9a/ab/099aab3e6a69569ea9ea0b8f050f2927.jpg",
      cords: ["23", "43", "67"],
    },
    {
      name: "Country Side",
      place: "Florida",
      count: "3",
      img: "https://img.freepik.com/premium-photo/modern-house-with-beautiful-design-autumngenerative-ai_841229-1637.jpg",
      cords: ["78", "13", "63"],
    },
    {
      name: "Jamcian slay",
      place: "Miami",
      count: "4",
      img: "https://i0.wp.com/jewkesdesign.com/wp-content/uploads/2023/04/Jewkes-Design_Black-Modern-Barn-House_01.jpg?resize=1024%2C683&ssl=1",
      cords: ["43", "13", "41"],
    },
  ];

  const arrLength = details.length;
  const legRef = useRef(null);
  const imageRef = useRef(null);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".clock",
        start: "top 50%",
        end: "bottom 20%",
        toggleActions: "play none none none",
      },
    });
    tl.fromTo("#line", { width: "0%" }, { width: "31%",delay:2, duration: 2 });

    const tl2 = gsap.timeline({
      repeat:  - 1,
      scrollTrigger: {
        trigger: ".clock",
        start: "top 50%",
        end: "bottom 20%",
        toggleActions: "play none none none",
      },
    });

    tl2.to(legRef.current, {
      rotation: 360,
      transformOrigin: "bottom",
      duration: 1.5,
      ease: "linear",
      scale: 0,
      opacity: 0,
      onComplete: () => {
        setIndex((prevIndex) => (prevIndex + 1) % arrLength);
      },
      onUpdate: () => {
        const angle = gsap.getProperty(legRef.current, "rotation") % 360;
        console.log(angle);
        const x = 50 + 50 * Math.cos((Math.PI * angle) / 180 - Math.PI / 2);
        const y = 50 + 50 * Math.sin((Math.PI * angle) / 180 - Math.PI / 2);
        let clipPathValue;
        console.log(x, "x", y, "y");
        if (angle <= 90) {
          clipPathValue = `polygon(50% 50%, 50% 0%, 100% 0%, ${x}% ${y}%, 50% 50%)`;
        } else if (angle <= 180) {
          clipPathValue = `polygon(50% 50%, 50% 0%, 100% 0%, 100% 100%, ${x}% ${y}%, 50% 50%)`;
        } else if (angle <= 270) {
          clipPathValue = `polygon(50% 50%, 50% 0%, 100% 0%, 100% 100%, 0% 100%, ${x}% ${y}%, 50% 50%)`;
        } else {
          clipPathValue = `polygon(50% 50%, 50% 0%, 100% 0%, 100% 100%, 0% 100%, 0% 0%, ${x}% ${y}%, 50% 50%)`;
        }
        gsap.set(imageRef.current, {
          clipPath: clipPathValue,
        });
      },
    });
    tl.fromTo(
      "#location",
      { opacity: 0, scale: 0, y: 100 },
      { opacity: 1, scale: 1, y: 0, duration: 1 },
      0
    );
    tl.fromTo(
      "#count",
      { opacity: 0, scale: 0, y: 100 },
      { opacity: 1, scale: 1, y: 0, duration: 1 },
      0
    );
    tl.fromTo(
      "#blk-btn",
      { width: "50px" },
      { width: "150px", duration: 2 },
      0
    );
    tl.fromTo(
      "#bt-tx",
      { y: 100, opacity: 0 },
      { y: 0, delay: 2, opacity: 1 },
      0
    );

    tl.add(tl2, "+=0");
    return () => {
      tl.kill();
    };
  }, [arrLength]);

  return (
    <div className="main-mid">
      <div className="middle">
        <div className="middle_animations">
          <div className="counting" id="count">
            {details[index].count}
          </div>
          {/* <div className="clock" style={{ backgroundImage: `url(${imgs[index+1]})`, backgroundSize: 'cover' }} > */}
          <div className="clock" ref={imageRef}>
            <div className="leg" ref={legRef}></div>
            <div className="circle"></div>
            <img
              src={details[index].img}
              className="image"
              alt="clock segment"
            />
          </div>
          {/* <div className="line" id="line"></div> */}
          <div className="loc" id="location">
            {details[index].name}
            <br></br>
            {details[index].place}
          </div>
        </div>
      </div>
      <div className="middle-lower">
        <div>
          <p>Best of Month</p>
        </div>
        <div>
          <p className="cords" id="cords">
            {`${details[index].cords[0]}° ${details[index].cords[1]}' ${details[index].cords[2]}" `}
          </p>
        </div>
        <div>
          <button className="black-btn" id="blk-btn">
            <p id="bt-tx">Book this Villa</p>
          </button>
        </div>
      </div>
      <div className="line" id="line"></div>
    </div>
  );
};

export default LineAnimation;
