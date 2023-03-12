import data from "./data.json";
import ProfileInfo from "./components/ProfileInfo";
import Card from "./components/Card";
import Time from "./components/Timeframes";
import { useState, useEffect} from "react";
import CardContainer from './components/test';
function App() {
  const [time, setTime] = useState("daily");
  const [hours, setHours] = useState(data)


  return (
    
    <div className="container">
      <div className="wrapper">
        <div className="profile-card">
          <div className="profile-info">
            <img src={require("./images/image-jeremy.png")} alt="" />
            <p>Report for</p>
            <div className="name">Jeremy Robson</div>
          </div>
          <div className="timeframes">
            <Time focused = {time == "daily"} id="Daily" index="1" text="Daily" onClick={() => {
              
              setTime ('daily');
            
            }}/>
            <Time focused = {time == "weekly"} id="Weekly" index="2" text="Weekly" onClick={(e) => {
              
              setTime ('weekly');
              
            }}/>
            <Time focused = {time == "monthly"} id="Monthly" index="3" text="Monthly" onClick={(e) => {
              
              setTime ('monthly');
              
            }}/>
          </div>
        </div>
        <CardContainer hours ={hours} time ={time}/>
      </div>
    </div>
  );
}

export default App;
