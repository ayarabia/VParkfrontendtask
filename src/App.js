import SideBar from "./components/sideBar";
import Routing from "./routes/Routing";
import { BrowserRouter } from "react-router-dom";
import Header from "./components/header";

function App() {
  return (
    <div className="container">
      <BrowserRouter>
        <Header></Header>
        <SideBar>
          <Routing />
        </SideBar>
      </BrowserRouter>
    </div>
  );
}
export default App;
