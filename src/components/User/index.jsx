import React from "react";
import { AiOutlineUser } from "react-icons/ai";
import { MdKeyboardArrowRight } from "react-icons/md";
import { AiOutlineLogout } from "react-icons/ai";
import { CiSettings } from "react-icons/ci";
import "./style.css";
function User() {
  return (
    <div className="user-wrraper">
      <div className="item">
        <AiOutlineUser />
        <p className="titel">My Account</p>
        <MdKeyboardArrowRight />
      </div>
      <div className="item">
        <CiSettings />
        <p className="titel">Settings</p>
        <MdKeyboardArrowRight />
      </div>
      <div className="item">
        <AiOutlineLogout />
        <p className="titel">Logout</p>
        <MdKeyboardArrowRight />
      </div>
    </div>
  );
}

export default User;
