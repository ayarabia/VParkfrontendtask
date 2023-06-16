import React, { useState } from "react";
import vehicle from "../../assets/images/vehicle.svg";
import img1 from "../../assets/images/img1.svg";
import img2 from "../../assets/images/img2.svg";
import "./style.css";
import Dropdown from "../dropdown";
function VParkFleet() {
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
          <div key={item.title}>
            <Dropdown img={item.image} color={item.color}></Dropdown>
          </div>
        );
      })}
    </div>
  );
}
export default VParkFleet;