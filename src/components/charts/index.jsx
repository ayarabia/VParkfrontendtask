import React from "react";
import "./style.css";
import { ResponsivePie } from "@nivo/pie";
import circle from "../../assets/images/circle.svg";
import halfCircle from "../../assets/images/halfCircle.svg";
function Charts() {
  const data = [
    {
      id: "active",
      label: "60% Active Vehicles",
      value: 60,
      color: "#CAE4FA",
    },
    {
      id: "inactive",
      label: "40% InActive Vehicles",
      value: 40,
      color: "#1070C5",
    },
  ];
  return (
    <div className="charts">
      <div>
        <p className="title">Active Vehicles Vs. In-Active Vehicles</p>
        <div className="active">
          <div></div>
          <p>Active Vehicles</p>
        </div>
        <div className="inactive">
          <div></div>
          <p>In-Active Vehicles</p>
        </div>
      </div>
      <div className="images">
        <img src={circle} alt="circle" />
        <img src={halfCircle} alt="half-circle" />
      </div>
      <div className="ratio">
        <div>
          <p className="num">60%</p>
          <span className="text">Active Vehicles</span>
        </div>
        <div>
          <p className="num">40%</p>
          <span className="text">In-Active Vehicles</span>
        </div>
      </div>
      {/* <ResponsivePie
      data={data}
      margin={{ top: 40, right: 80, bottom: 80, left: 80 }}
      innerRadius={0}
      // padAngle={0.9}
      cornerRadius={3}
      activeOuterRadiusOffset={8}
      borderWidth={1}
      borderColor={{ from: "color", modifiers: [["darker", 0.2]] }}
      arcLinkLabelsSkipAngle={10}
      arcLinkLabelsTextColor="#333333"
      arcLinkLabelsThickness={2}
      arcLinkLabelsColor={{ from: "color" }}
      arcLabelsSkipAngle={10}
      arcLabelsTextColor={{ from: "color", modifiers: [["darker", 2]] }}
    /> */}
    </div>
  );
}

export default Charts;
