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
     
        <p className='tooltip' style={style}>{text}</p>
    </div>
        
  )
}

export default Tooltip
