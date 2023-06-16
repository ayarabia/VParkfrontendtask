import React, { useState } from "react";
import "./style.css";
import DropdownItems from "../dropdown-items";
import DropdownIcon from "../dropdown-icon";

function Dropdown(props) {
  const [showMenu, setShowMenu] = useState(false);
  const [rotate, setRotate] = useState("");
  const { img, color } = props;
  const handlClick = (e) => {
    setShowMenu(!showMenu);
    showMenu ? setRotate("rotate") : setRotate("");
  };
  return (
    <>
      <div className="dropdown" onClick={handlClick}>
        <div className="image">
          <img src={img} alt={img} />
          <div className="circle" style={{ background: color }}></div>
          <p>Smart Vehicle 1</p>
        </div>

        <div className={`${rotate}`}>
          <DropdownIcon />
        </div>
      </div>
      {showMenu && (
        <div className="menu">
          <DropdownItems />
        </div>
      )}
    </>
  );
}
export default Dropdown;
