
import React,{useState} from "react";
import './../styles/App.css';
import Tooltip from "./Tooltip";

const App = () => {
  const [visible, setVisible] = useState({ hover1: false, hover2: false });
  const hoverinFunction = (e) => {
    // e.stopPropogation();

 if(e.target.id=="hover1"){
  console.log("hover1");
  setVisible((prev)=>{

    return {...prev ,["hover1"]:true};
  })
 }
 else{
  console.log("hover2");

  setVisible((prev)=>{
    return {...prev ,["hover2"]:true};
  })
 }
  }

  const hoveroutFunction = (e) => {
    // e.stopPropogation();

    if(e.target.id=="hover1"){
      
     setVisible((prev)=>{
       return {...prev ,["hover1"]:false};
     })
    }
    else{
     setVisible((prev)=>{
       return {...prev ,["hover2"]:false};
     })
    }
  }
  console.log(visible);
  return (
    <div >
      {/* Do not remove the main div */}
      {<h2    className='tooltip' id="hover1" onMouseEnter={hoverinFunction}
        onMouseLeave={hoveroutFunction}>
       { visible.hover1 ? <Tooltip text={"This is a tooltip"} />: ""}
        Hover over me
      </h2>}

      <p id="hover2" onMouseEnter={hoverinFunction}
        onMouseLeave={hoveroutFunction}
      >Hover over me to see another tooltip

        {visible.hover2 ? <Tooltip text={"This is a tooltip"} />: ""}
      </p>

    </div>
  )
}

export default App


import React,{useState} from "react";
import './../styles/App.css';
import Tooltip from "./Tooltip";

const App = () => {
  const [visible, setVisible] = useState({ hover1: false, hover2: false });
  const hoverinFunction = (e) => {
    // e.stopPropogation();

 if(e.target.id=="hover1"){
  console.log("hover1");
  setVisible((prev)=>{

    return {...prev ,["hover1"]:true};
  })
 }
 else{
  console.log("hover2");

  setVisible((prev)=>{
    return {...prev ,["hover2"]:true};
  })
 }
  }

  const hoveroutFunction = (e) => {
    // e.stopPropogation();

    if(e.target.id=="hover1"){
      
     setVisible((prev)=>{
       return {...prev ,["hover1"]:false};
     })
    }
    else{
     setVisible((prev)=>{
       return {...prev ,["hover2"]:false};
     })
    }
  }
  console.log(visible);
  return (
    <div>
      {/* Do not remove the main div */}
      {<h2 id="hover1" className="tooltip" onMouseEnter={hoverinFunction}
        onMouseLeave={hoveroutFunction}>
       { visible.hover1 ? <Tooltip text={"This is a tooltip"} />: ""}
        Hover over me
      </h2>}

      <p id="hover2" onMouseEnter={hoverinFunction}
        onMouseLeave={hoveroutFunction}
      >Hover over me to see another tooltip

        {visible.hover2 ? <Tooltip text={"This is a tooltip"} />: ""}
      </p>

    </div>
  )
}

export default App
