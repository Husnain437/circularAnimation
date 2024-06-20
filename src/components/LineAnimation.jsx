import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import "../App.css";

const LineAnimation = () => {
  const imgs = [
    "https://img.freepik.com/free-photo/luxury-pool-villa-spectacular-contemporary-design-digital-art-real-estate-home-house-property-ge_1258-150765.jpg",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSRbcrj53mGyk-u4JwrIb6z1RBAeCpxR78gfQ&s",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTsgyrtjFO3Q1lwJDzWjUaQfflt4Jz7RkkKLA&s",
    "https://smartasset.com/wp-content/uploads/sites/2/2013/03/modern-custom-suburban-home-exterior-picture-id1255835529-1.jpg",
  ];
  const arrLength = imgs.length;
  const legRef = useRef(null);
  const imageRef = useRef(null);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const tl = gsap.timeline({ repeat: arrLength-1 });

    tl.to(legRef.current, {
      rotation: 360,
      transformOrigin: "bottom",
      duration: 3,
      ease: "linear",
      onComplete: () => {
        setIndex(prevIndex => (prevIndex + 1) % arrLength); 
      },
      onUpdate: () => {
        const angle = gsap.getProperty(legRef.current, "rotation") % 360;
        const x = 50 + 50 * Math.cos((Math.PI * angle) / 180 - Math.PI / 2);
        const y = 50 + 50 * Math.sin((Math.PI * angle) / 180 - Math.PI / 2);
        let clipPathValue;

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
    return () => {
      tl.kill();
    };
  }, [arrLength]);

  return (
    <div className="clock" >
      <div className="leg"ref={legRef}></div>
      <img
        src={imgs[index]}
        className="image"
        ref={imageRef}
        alt="clock segment"
      />
    </div>
  );
};

export default LineAnimation;
