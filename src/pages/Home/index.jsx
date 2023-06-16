import React from "react";
import "./style.css";
import ActiveVehicles from "../../components/activeVehicles";
import VParkFleet from "../../components/vParkFleet";
import Tools from "../../components/tools";
import Route from "../../components/route";
import Notification from "../../components/notification";
// import Titel from '../../components/title'
// import Welcome from '../../components/welcome'
// import {Container, Row ,Col} from 'react-bootstrap'
// import QuickDraft from '../../components/quickDraft'
// import YearlyTargets from '../../components/yearlyTargets'
// import Tickets from '../../components/tickets'
// import LatestNews from '../../components/latestNews'
// import LatestTasks from '../../components/latestTasks'
// import TopSearch from '../../components/topSearch'
// import LatestUploads from '../../components/latestUploads'
// import LastProject from '../../components/lastProject'
// import Reminders from '../../components/reminders'
// import LatestPost from '../../components/latestPost'
// import SocialMedia from '../../components/socialMedia'
// import Projects from '../../components/projects'
function Home() {
  return (
    <div className="home">
      <p className="titel">Welcome! John Doe</p>
      <div className="ellips">
          <div className="dot"></div>
      </div>
      <div className="home-container">
        <VParkFleet />
        <ActiveVehicles />
      </div>
      <Tools/>
      <Route/>

    </div>
  );
}

export default Home;
