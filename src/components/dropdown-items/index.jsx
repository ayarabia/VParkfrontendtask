import React, { useState } from "react";
import camera from "../../assets/images/camera.svg";
import "./style.css";
function DropdownItems() {
  let bg = "";
  const AddBg = (status) => {
    switch (status) {
      case "Active":
      case "Normal":
        bg = "active";
        break;
      case "High":
        bg = "high";
        break;
      default:
        bg = "";
    }
    return bg;
  };

  const options = [
    {
      image: camera,
      subTitel: "Camera",
      title: "Online",
      status: "Active",
    },
    {
      image: camera,
      subTitel: "Network",
      title: "Available",
      status: "Active",
    },
    {
      image: camera,
      subTitel: "Memory",
      title: "20%",
      status: "Normal",
    },
    {
      image: camera,
      subTitel: "CPU Temp",
      title: "70",
      status: "High",
    },
  ];

  return (
    <div className="dropdownItems">
      {options.map((item) => {
        return (
          <div className="item">
            <img src={item.image} alt={item.image} />
            <p>{item.subTitel}</p>
            <h4>{item.title}</h4>
            <div className={`status ${AddBg(item.status)}`}>
              <span>{item.status}</span>
              <div
                className="circle"
                style={{
                  backgroundColor:
                    item.status == "High" ? "#E63438" : "#00AE7D",
                }}
              ></div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
export default DropdownItems;