import React from "react";

const Bar = (props)=>{
  var width =props.number *3;
  var scope = {
    width:width +"px"
  }
  console.log(scope);
  return(
    <div className="bar">
      <div className={props.stat}style={scope}></div>
    </div>
  )

}

export default Bar;
