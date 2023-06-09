import React from "react";
import { BiBellPlus } from "react-icons/bi";
import { MdKeyboardArrowRight } from "react-icons/md";
import "./style.css";
function Notification() {
  return (
    <div className="notfication">
      <div className="item">
        <div className="bible">
          <BiBellPlus />
        </div>
        <div>
          <p className="titel">GIS Data Request</p>
          <span className="description">
            Ahmad Khalil is Waiting for approval to Add New GIS Data
          </span>
        </div>
        <div className="time">
          <span>12:08 PM</span>
          <a href="#">
            Show <MdKeyboardArrowRight />
          </a>
        </div>
      </div>
    </div>
  );
}
export default Notification;