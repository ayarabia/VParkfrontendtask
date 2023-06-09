import React from "react";
import TripForm from "../form";
import Layer from "../../assets/images/Layer.svg";
import Trash from "../../assets/images/Trash.svg";
import write from "../../assets/images/write.svg";
import "./style.css";

function Route() {
  return (
    <div className="route">
      <h4>Trip Route</h4>
      <div className="route-container">
        <TripForm />
        <div className="tools">
          <img src={Layer} alt="Layer Image" />
          <img src={write} alt="write Image" className="write" />
          <img src={Trash} alt="Trash Image" />
          <div class="triangle-down"></div>
        </div>
      </div>
    </div>
  );
}
export default Route;