import React from "react";
import BG from "../../assets/images/BG.png";
import BG1 from "../../assets/images/BG1.png";
import BG2 from "../../assets/images/BG2.png";
import BG3 from "../../assets/images/BG3.png";
import "./style.css";
function VehicleFeatures() {
  const features = [
    {
      image: BG,
      subTitel: "Total Violations",
      title: "2,108",
    },
    {
      image: BG1,
      subTitel: "Total Dectations",
      title: "100,000",
    },
    {
      image: BG2,
      subTitel: "Total Active Vehicles",
      title: "48",
    },
    {
      image: BG3,
      subTitel: "Total Distance in KM",
      title: "50,000",
    },
  ];
  return (
    <div className="features">
      {features.map((item) => {
        return (
          <div className="item">
            <img src={item.image} alt={item.image} />
            <h4>{item.title}</h4>
            <p>{item.subTitel}</p>
          </div>
        );
      })}
    </div>
  );
}

export default VehicleFeatures;
