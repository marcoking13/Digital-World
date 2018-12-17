import React from "react";
import Bar from "./bar_component";
import "./../css/digiProfile.css";
class DigimonProfile extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      attributes: {},
      flag:true,
      number:false
    }
  }
  //   componentDidMount(){
  //     this.props.attributes.map((attribute)=>{
  //
  //     if(this.props.currentDigimon.attribute == attribute.name){
  //        return this.setState({attributes: attribute});
  //     }
  //   });
  //
  // }

//
// moveRender(){
//
//   return  this.props.currentDigimon.moves.map((move)=>{
//       console.log(move);
//       return (
//         <div className="movesp f">
//           <h3 className="moveName">{move}</h3>
//         </div>
//     )
//     });
// }
  renderStats(num){
    if(!num){
    return(


      <div className="statNameContainer col-1">

        <h4 className="statName o">HP: {99}</h4>
        <h4 className="statName a">Atk:  {99}</h4>
        <h4 className="statName d">Def:  {99}</h4>
        <h4 className="statName sp">Spd:  {99}</h4>
        <h4 className="statName s">Sp:  {99}</h4>
          <button className="btn nn"></button>
      </div>

  )
  }else{
    return(
      <div className="statNameContainer">

        <h4 className="statName o">HP:</h4>
        <h4 className="statName a">Atk:</h4>
        <h4 className="statName d">Def:</h4>
        <h4 className="statName sp">Spd:</h4>
        <h4 className="statName s">Sp:</h4>
          <button className="btn nn"></button>
      </div>
  )

  }

  }
  renderBar(num){
    if(num){
    return(
      <div className="barContainer col-4">
        <Bar stat = "orange blood" number =  {99}/>
        <Bar stat = "red blood" number = {123}/>
        <Bar stat = "blue blood" number = {239}/>
        <Bar stat = "green blood" number = {500}/>
        <Bar stat = "purple blood" number = {399}/>
      </div>
  )
  }
  }
  // statusDisplay(){
  //   var digiStatus =   this.props.currentDigimon.status;
  //   digiStatus=  digiStatus.charAt(0).toUpperCase() + digiStatus.slice(1);
  //   switch(this.props.currentDigimon.status){
  //     case "baby":
  //     return <h4 className="digiT ba">{digiStatus}</h4>
  //     case "rookie":
  //     return <h4 className="digiT ra">{digiStatus}</h4>
  //     case "champion":
  //     return <h4 className="digiT ca">{digiStatus}</h4>
  //     case "ultra":
  //     return <h4 className="digiT ua">{digiStatus}</h4>
  //     case "mega":
  //     return <h4 className="digiT ma">{digiStatus}</h4>
  //   }
  // }



  render(){

    return(

      <div className="row profileContainer">
        <h4 className="level">LV:99</h4>
        <h2 className="digiT">Cyberdramon</h2>
       <img className="emblem" src="./"/>


        <div className="imageContainer col-4">
          <img src="./../digimon/cyberdramon3D.png" className="d3"/>
        </div>

          {this.renderStats(99)}
          {this.renderBar(90)}
        <div className="col-4 moveContainer"> </div>
          <div className="col-4 moveDetailContainer g">

          </div>
      </div>
    )


}
}


export default DigimonProfile
