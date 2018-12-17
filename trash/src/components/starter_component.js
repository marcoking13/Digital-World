import React from "react";
import "./../css/index.css";


class StarterScreen extends React.Component {

  componentDidMount(){
document.addEventListener("keydown",()=>{
     var x = document.getElementById("com2");
     var y = document.getElementById("com");
     x.play();
     y.play();
   });
  }

  render(){

    return(
      <div  className="starting">
        <audio id="com"  autoPlay>
          <source type="audio/mpeg" src="./../digimon/audio/darkness.mp3"/>
        </audio>
        <audio id="com2">
          <source type="audio/mpeg" src="./../digimon/audio/computer.mp3"/>
        </audio>
          <button className="loginButton btn btn-primary">Login</button>
          <img alt="k" src = "./../digimon/digimonlinks.png"className="digimonlink"/>
          <h1 className = "starthere"> Press Start </h1>
      </div>
    )
  }
}


export default StarterScreen;
