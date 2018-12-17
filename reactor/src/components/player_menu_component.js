import React from "react";
import "./../css/menu.css";
import 'babel-polyfill';
// import DigimonLine from "./digimon_line";
// import DigimonOption from "./../components/digimon_options.js";
// import Moves from "./../components/digimon_moves.js";
import axios from "axios";

// import Bar from "./../components/stat_bar";

class Menu extends React.Component {
  componentDidMount(){

    
  }


  render(){

    return(
      <div className="backMenu">
        <div className="MenuContainer col-10 xm">
          <audio id="com"  autoPlay>
            <source type="audio/mpeg" src="./../digimon/audio/darkness.mp3"/>
          </audio>
          <div className="profileContainer44">
            <div className="pC">
              <div className="pCIC">
                <img  alt="k" className="pCI" src="./../digimon/arrows/profile.png"/>
              </div>
              <div className="pCSC">
                <h5 className="pN">Name: {this.props.profile.name}</h5>
                <h5 className="pN">Partner:{this.props.profile.digimon[0].name}</h5>
                <h5 className="pN br">{this.props.profile.rank}</h5>
              </div>
            </div>
            <div className="l4"id="trapezoid">
              <img alt="k" className="icoI" src = "./../digimon/arrows/map.png" />
              <h6 className="t-c" > Map </h6>
            </div>
            <div className="ll4"id="trapezoid2">
              <img alt="k" className="icoI tb mm cr" src = "./../digimon/arrows/memory.jpg"/>
              <h6 className="t-c tb" > Digimon </h6>
            </div>
            <div className="ll4"id="trapezoid3">

            <img alt="k" className="icoI tb cr" src = "./../digimon/arrows/champ.png" />
            <h6 className="t-c tb" > Championship </h6>
            </div>
            <div className="l4"id="trapezoid4">
              <img alt="k" className="icoI  cr mp mppp" src = "./../digimon/arrows/digi.png" />
              <h6 className="t-c  mp" > Digimon Dex  </h6>
              </div>
            </div>
          </div>
        </div>
    )
  }
}


export default  Menu;
