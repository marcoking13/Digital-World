import React from "react";
import "./../css/digimonMap.css";
import Map from "./../components/map_point_component.js";
export default class DigimonMap extends React.Component{
  constructor(props){
    super(props);
    this.state= {
      places:[
        {
        location:{
          top:250,
          left:400
        },

        name:"Peaceful Hills",
        digimon:["biyomon","patamon","tokomon","tsunomon","gabumon"],
        requirements:"bronze"
      },
      {
      location:{
        top:550,
        left:200
      },

      name:"Spooky Grotto",
      digimon:["keramon","botamon","blackagumon","blacktyrannomon","poyomon","gesomon"],
      requirements:"silver"
    },
    {
    location:{
      top:550,
      left:800
    },

    name:"Echo Desert",
    digimon:["garudamon","birdramon","angemon","clockmon","blackgarurumon","garurumon"],
    requirements:"silver"
  },

  {
  location:{
    top:100,
    left:600
  },

  name:"Icy Cave",
  digimon:["ikkakumon","zudomon","weregarurumon","machinedramon","gomamon"],
  requirements:"gold"
},

  {
  location:{
    top:400,
    left:1000
  },

  name:"Echo Mountain",
  digimon:["garudamon","birdramon","angemon","clockmon","blackgarurumon","garurumon"],
  requirements:"gold"
},
{
location:{
  top:400,
  left:600
},

name:"Sky Plains",
digimon:["garudamon","birdramon","angemon","clockmon","blackgarurumon","garurumon"],
requirements:"silver"
},
{
location:{
  top:200,
  left:900
},

name:"Neon Town",
digimon:["poyomon","kapurimon","toyagumon","clockmon","patamon","tokomon"],
requirements:"bronze"
},
{
location:{
  top:70,
  left:1300
},

name:"Celestia City",
digimon:["poyomon","kapurimon","toyagumon","clockmon","patamon","tokomon"],
requirements:"silver"
},
{
location:{
  top:170,
  left:200
},

name:"Ice Beach",
digimon:["poyomon","kapurimon","toyagumon","clockmon","patamon","tokomon"],
requirements:"silver"
},
{
location:{
  top:400,
  left:65
},

name:"Rumbling Volcano",
digimon:["machinedramon","phoenixmon","skullgreymon","cyberdramon","blackweregarurumon"],
requirements:"gold"
},
    ]
    }
  }
    renderMap(){
      return this.state.places.map((place)=>{
        return <Map location={place.location} position={place.position} name={place.name} image={place.image} scope = {place.scope} digimon={place.digimon} requirements={place.requirements}/>
      });
    }
  render(){
    return(  <div className="mapB">
        <img className="map" src="./../digimon/backgrounds/map.jpg"/>
          {this.renderMap()}
      </div>
    )
  }
}
