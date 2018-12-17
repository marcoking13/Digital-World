import React from "react";


class DigiContainer extends React.Component {
  constructor(props){
  super(props);
  this.state = {question:"src/digimon/question.png"}

}
render(){
  console.log(this.props)
    if(this.props.digimon.found){

    return(
      <div className="digiContainer"key={this.props.digimon.name}>
      <img alt="k" src={this.props.digimon.still} className="digimon"/>
      <p className="name">{this.props.digimon.name}</p>
      


    </div>
  );
}
return(
  <div className="digiContainer mystery"key={this.props.digimon.name}>
      <img alt="k" src={this.state.question} className="question"/>
  </div>
);

  }
}
export default DigiContainer;
