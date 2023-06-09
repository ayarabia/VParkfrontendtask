import React, { useState } from "react";
import "./style.css";
import DropdownItems from "../dropdown-items";
import DropdownIcon from "../dropdown-icon";


function Dropdown() {
  const [showMenu, setShowMenu] = useState(false);
  const [rotate, setRotate] = useState("");

  const handlClick = (e) => {
    setShowMenu(!showMenu);
    showMenu ? setRotate("rotate") : setRotate("");
  };
  return (
    <div className="dropdown" onClick={handlClick}>
      {showMenu && (
        <div className="menu">
          <DropdownItems />
        </div>
      )}

      <div className={`${rotate}`}>
        <DropdownIcon />
      </div>
    </div>
  );
}
export default Dropdown;