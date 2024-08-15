
import React,{useState} from "react";
import './../styles/App.css';
import Tooltip from "./Tooltip";

const App = () => {
 return(
  <div style={{paddingTop:"50px"}}>

     <h2 className="tooltip">
      <Tooltip text="This is a tooltip">Hover over me</Tooltip>
     </h2>
     <br/>
     <p className="tooltip">
      <Tooltip text="This is another tooltip"> hover over me to see another tooltip</Tooltip>
     </p>
  </div>
 )
}

export default App
