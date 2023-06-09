import React, { useState } from "react";
import vehicle from "../../assets/images/vehicle.svg";
import img1 from "../../assets/images/img1.svg";
import img2 from "../../assets/images/img2.svg";
import "./style.css";
import Dropdown from "../dropdown";
function VParkFleet() {
  const [showMenu, setShowMenu] = useState(false);

  const handlClick = (e) => {
    // e.stopPropagation();
    setShowMenu(!showMenu);
  };
  const vehicles = [
    {
      image: vehicle,
      color: "#F9B317",
      title: "Smart Vehicle 1",
    },
    {
      image: vehicle,
      color: "#00AB80",
      title: "Smart Vehicle 2",
    },
    {
      image: vehicle,
      color: "#00AB80",
      title: "Smart Vehicle 3",
    },
    {
      image: vehicle,
      color: "#F9B317",
      title: "Smart Vehicle 4",
    },
    {
      image: vehicle,
      color: "#E63438",
      title: "Smart Vehicle 5",
    },
  ];
  return (
    <div className="vpark">
      <div className="titel">
        <p>VPark Fleet</p>
        <div className="icons">
          <img src={img1} alt="img1" />
          <img src={img2} alt="img2" />
        </div>
      </div>

      {vehicles.map((item) => {
        return (
          <div className="item" key={item.title} onClick={handlClick}>
            <div className="image">
              <img src={item.image} alt={item.image} />
              <div className="circle" style={{ background: item.color }}></div>
              <p>Smart Vehicle 1</p>
            </div>
            <div className="dropdown">
              <Dropdown></Dropdown>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default VParkFleet;
