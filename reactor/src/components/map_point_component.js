import React from "react";

const Map =(props)=>{
  var style = {

    top:props.location.top+"px",

    left:props.location.left+"px"

  }
    return (
      <div data = {props} location = {props.location}className="mark"style={style}>


      </div>
    )
}

export default Map;
