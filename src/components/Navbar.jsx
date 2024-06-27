import React, { useState } from 'react';
import search from "../assets/search-interface-symbol.png";
import profile from "../assets/user (1).png";
import plane from "../assets/airplane.png";
import world from "../assets/globe.png";
import key from "../assets/key.png";
import menu from "../assets/more.png";

const Navbar = (props) => {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleMenuClick = () => {
    setMenuOpen(!menuOpen);
  };
  console.log(props.color," color");

  return (
    <>
      <div className="nav" style={{color: props.color}}>
        <div className="uper">
          <div className="upper-left">
            <p className="lower-text">Services</p>
            <p className="lower-text">Destinations</p>
          </div>
          <div>
            <p className="lower-text">OrnaVillas</p>
          </div>
          <div>
            <img className="icon" src={search} alt="icon" />
            <img className="icon" src={profile} alt="icon" />
          </div>
        </div>
        <div className="ln" style={{backgroundColor: props.color}}></div>
        <div className="lower" style={{display: props.display}}>
          <div>
            <img className="icon" src={plane} alt="plane" />
            <img className="icon" src={world} alt="world" />
            <img className="icon" src={key} alt="key" />
          </div>
          <div className="lower-right">
            <p className="lower-text">32 Countries</p>
            <p className="lower-text">650 villas</p>
            <p className="lower-text">21 Architects</p>
          </div>
        </div>
      </div>
      <div className='nav-mob'>
        <div className='logo'> OrnaVillas</div>
        <div>
          <img className='icon' src={menu}  />
        </div>
      </div>
    </>
  );
};

export default Navbar;
