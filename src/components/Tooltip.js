import React from 'react'

const Tooltip = ({text}) => {


    

    let style={
        padding:"15px",
        backgroundColor:"red",
        color:"white",
        width:"200px",
        height:"100px",
        borderRadius:"30px",
        display:"flex",
        alignItem:"center",
        justifyContent:"center"

    }
  return (
    
    <div>
     
        <div style={style}>{text}</div>
    </div>
        
  )
}

export default Tooltip
