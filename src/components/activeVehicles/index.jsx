import React from "react";
import "./style.css";
import VehicleFeatures from "../vehicle-features";
import Charts from "../charts";
function ActiveVehicles() {
  return (
    <div className="activeVehicle">
      <Charts />
      <VehicleFeatures />
    </div>
  );
}
export default ActiveVehicles;