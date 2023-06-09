import React from "react";
import generate from "../../assets/images/generate.png";
import { BsInfo } from "react-icons/bs";
import { FiPlus } from "react-icons/fi";
import "./style.css";
function TripForm() {
  return (
    <div className="form">
      <div className="title">
        <h5>Trip Route </h5>
        <BsInfo />
      </div>
      <p className="text">
        Draw Trip Route by Adding Start point, Way points,and End point
      </p>
      <div className="inptus">
        <div>
          <h5>Trip name</h5>
          <input type="text" placeholder="Trip 2" />
        </div>
        <div>
          <h5>Sector</h5>
          <select>
            <option value="">Marina</option>
          </select>
        </div>
      </div>
      <div className="generat">
        <div>
          <h5>Auto Generate </h5>
          <BsInfo />
        </div>
        <div className="image">
          <img src={generate} alt="generate" />
        </div>
      </div>
      <div className="points">
        <div>
          <p>
            Add <br /> Start Point
          </p>
          <button className="green">
            <FiPlus />
          </button>
        </div>
        <div>
          <p>
            Add <br /> Way Point
          </p>
          <button className="yellow">
            <FiPlus />
          </button>
        </div>
        <div>
          <p>
            Add <br /> Stop Point
          </p>
          <button className="red">
            <FiPlus />
          </button>
        </div>
      </div>
      <div className="btns">
        <button className="yellow"> Cansel</button>
        <button className="yellow save">Save</button>
      </div>
    </div>
  );
}

export default TripForm;
