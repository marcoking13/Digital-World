import React from "react";
import "./../css/line.css";

import DigiContainer from "./digi_container_component";


class DigimonLine extends React.Component{
  constructor(props){


    super(props);
    var family = [];
    var baby;
    var rookie;
    var champions=[];
    var ultras=[];
    var megas=[];

    setTimeout(()=>{
    // digimon.data.map((digimon)=>{
    //
    //   if(digimon.family == this.props.currentDigimon.family){
    //       console.log("Digimon passed",digimon)
    //       family.push(digimon);
    //       switch(digimon.status){
    //         case "baby":
    //           return baby = digimon
    //           case "rookie":
    //             return rookie = digimon
    //             case "champion":
    //               return champions.push(digimon)
    //               case "ultra":
    //                 return ultras.push(digimon);
    //                 case "mega":
    //                   return megas.push(digimon)
    //
    //       }
    //   }
    //
    // });

  },1000);
    this.state = {
        line:family,
        baby:baby,
        rookie:rookie,
        champions:champions,
        ultras:ultras,
        megas:megas,
        combo:true
    }
console.log(this.state.megas,this.state.ultras);
  }

  render(){

    if(!this.state.combo){
      return(

      <div className="lineContainer">
      <div className="part">
        <DigiContainer digimon="./../digimon/kokommon.png"/>
      <div>
        <div className="downArrow complete"></div>
        <DigiContainer digimon="./../digimon/veemon.png" />
    </div>
    </div>
      <div  className="arrows">
        <div className="arrow">
            <div className="beginning  line"></div>
              <div className="lines u final"></div>
         </div>
        </div>
      <div className="champions">
        <div className="one">
          <DigiContainer  digimon="./../digimon/aeroveedramon.png"/>
          </div>
      </div>
      <div className="ultras">
        <div className="one">
          <DigiContainer digimon="./../digimon/cyberdramon.png"/>
          </div>
      </div>
      <div className="megas">
        <div className="one">
          <DigiContainer  digimon="./../digimon/goldramon.png"/>
          </div>
      </div>
  </div>
);
    }
      return(
        <div className="lineContainer">
        <div className="part">
          <DigiContainer  digimon="./../digimon/poyomon.png"/>
        <div>
          <div className="downArrow complete"></div>
          <DigiContainer  digimon="./../digimon/gomamon.png" />
      </div>
      </div>
        <div  className="arrows">
          <div className="arrow">
          <div className="beginning complete line"></div>
          <div className="down complete line"></div>
          <div className="up complete line"></div>

            </div>
          </div>

        <div className="champions">

          <div className="o1">

            <DigiContainer  digimon="./../digimon/ikkakumon.png"/>
          </div>
        <div className="o2">
          <DigiContainer digimon="./../digimon/gesomon.png"/>
          </div>
        </div>

        <div className="ultras">

          <div className="o1">
            <DigiContainer digimon="./../digimon/zudomon.png"/>
          </div>
          <div className="o2">
            <DigiContainer  digimon="./../digimon/whalemon.png"/>
          </div>

        </div>

        <div className="megas">


          <div className="o1">
            <DigiContainer digimon="./../digimon/vikemon.png"/>
          </div>
          <div className="o2">
            <DigiContainer  digimon="./../digimon/leviamon.png"/>
          </div>
        </div>
    </div>
  );
}

}


export default DigimonLine;
