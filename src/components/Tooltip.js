import React, {useState} from 'react'

const Tooltip = ({text,children}) => {
  const [showTooltip, setShowTooltip]=useState(false);
 return(
  <div
   onMouseEnter={()=>setShowTooltip(true)}
   onMouseLeave={()=>setShowTooltip(false)}
  >
    {children}
    {showTooltip && <div className='tooltiptext' style={{
      width:"300px",
      backgroundColor:"red",
      color:"white",
      height:"100px",
      borderRadius:"20px",
      display:"flex",
      alignItems:"center",
      justifyContent:"center"
    }}>{text}</div>}

  </div>
 )
}

export default Tooltip
