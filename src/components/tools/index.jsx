import React from "react";
import "./style.css";
import setting from "../../assets/images/setting.png";
function Tools() {
  return (
    <div className="tools-container">
      <h4>
        {" "}
        Get a bird’s eye <span>view</span> in a snap.
      </h4>
      <p>
        We equip you with the tools to customise your dashboards and track fleet
        status, decorations, and violations at a glance. Easily run reports from
        a high-level overview down to the very last detail.
      </p>

      <img src={setting} alt="setting" />
    </div>
  );
}

export default Tools;