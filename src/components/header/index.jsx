import React, { useState } from "react";
import { AiOutlineSearch, AiOutlineMenu } from "react-icons/ai";
import { TbWorld } from "react-icons/tb";
import { BiBell } from "react-icons/bi";
import avater from "../../assets/images/avatar.png";
import logo from "../../assets/images/logo.png";
import "./style.css";
import DropdownIcon from "../dropdown-icon";
import Notification from "../notification";
import User from "../User";

function Header() {
  const [showNotfication, setNotfication] = useState(false);
  const [showinfo, setInfo] = useState(false);

  const handlNotfication = () => {
    setNotfication(!showNotfication);
  };
  const handlUser = () => {
    setInfo(!showinfo);
  };
  return (
    <div className="header">
      <div className="logo">
        <img src={logo} alt="logo" />
        <h1 className="logo">Logo</h1>
    
      </div>
      <div className="header-menu">
        <AiOutlineMenu />
      </div>
      <div className="wrapper">
        <div className="search">
          <input type="text" name="search" placeholder="Search" />
          <AiOutlineSearch />
        </div>
        <div className="setting">
          <TbWorld />
        </div>
        <div className="notifications" onClick={handlNotfication}>
          <BiBell />
          {showNotfication && (
            <div className="content">
              <Notification />
            </div>
          )}
        </div>

        <div className="user" onClick={handlUser}>
          <img src={avater} alt="avater" />
          <div>
            <p className="name">John Doe</p>
            <span>Admin</span>
          </div>
          <DropdownIcon />
          {showinfo && <User />}
        </div>
      </div>
    </div>
  );
}
export default Header;
