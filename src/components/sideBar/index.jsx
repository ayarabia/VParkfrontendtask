import React from "react";
import question from "../../assets/images/question.png";
import { AiFillHome, AiOutlineBarChart } from "react-icons/ai";
import { GrTransaction } from "react-icons/gr";
import { BiMap } from "react-icons/bi";
import { CgMenu } from "react-icons/cg";

import { Link} from "react-router-dom";
import "./style.css";
function SideBar({children }) {
  const items = [
    { icon: <AiFillHome />, labal: "Home", to: "/" },
    { icon: <GrTransaction />, labal: "Operation", to: "/settings" },
    { icon: <BiMap />, labal: "Map", to: "/profile" },
    { icon: <AiOutlineBarChart />, labal: "Reports", to: "/projects" },
    { icon: <CgMenu />, labal: "Control Panel", to: "/courses" },
  ];

  return (
    <div className="page">
      <div className="side_bar">
        {items.map((item, index) => {
          return (
            <Link to={item.to} key={item.labal}>
              <div
           
                className={`sidebar__menu__item ${index===0?"activeItem":""}`} 
              >
                <div className="icon">{item.icon}</div>
                <div className="text">{item.labal}</div>
              </div>
            </Link>
          );
        })}
        <div className="needHelp">
          <img src={question} alt="question mark" />
          <h5>Need Help?</h5>
          <p>
            Click here to find <br />
            Functionalities, Help, and More!
          </p>
          <a href="#" className="btn">
            Discover
          </a>
        </div>
      </div>
      <main>{children}</main>
    </div>
  );
}
export default SideBar;
