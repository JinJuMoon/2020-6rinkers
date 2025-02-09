import React, { useState } from "react";
import "../../css/common/header.css";
import Nav from "./Nav";
import MobileNav from "./MoblieNav";

const Header = ({ handleLogout }) => {
  const [slider, setSlider] = useState(false);

  const toggleSlider = () => {
    setSlider(!slider);
  };

  const offSlider = () => {
    setSlider(false);
  };

  return (
    <div className="headerContainer">
      <Nav handleLogout={handleLogout} />
      {slider && <div className="cover" onClick={toggleSlider} />}
      <MobileNav
        offSlider={offSlider}
        toggleSlider={toggleSlider}
        slider={slider}
        handleLogout={handleLogout}
      />
    </div>
  );
};

export default Header;
