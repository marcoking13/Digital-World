import React from "react";
import "./../css/index.css";
import axios from "axios";

class StarterScreen extends React.Component {



  constructor(props){
    super(props);
    this.state = {
      questions:"",
      length:"",
      answer:"",
      counter:0,
      data:[],
      flag:false

    }
  }
  componentDidUpdate(){
    if(this.state.flag === true && this.state.counter > 2){
      this.props.end(this.state.data)
    }
  }
  componentDidMount(){


    document.addEventListener("keydown",()=>{

      if(this.state.flag == false){




        axios.get("/api/starter").then((response)=>{
          console.log(response);
          this.setState({
            questions:response.data,
            length:response.data.length,
            flag:true
          });
        });
      }
    });
  }
  renderQuestions(){
    if(this.state.flag === true && this.state.counter > 2){
    return  this.props.end(this.state.data)
    }
    if(this.state.questions[this.state.counter].answer.type == "input"){
      return (
        <div>
          {this.renderInput()}
        </div>
      )
    }else if(this.state.questions[this.state.counter].answer.type == "gender"){
        return <div>{this.renderGender()}</div>
    }else{
      return <div>{this.renderDigimon(this.state.questions[this.state.counter].answer.choices)}</div>
    }
  }
  onChange(data){

    this.setState({answer:data});
  }
  renderInput(){
    return(
      <div className="col-12">
        <input
          onChange={event => this.onChange(event.target.value)}
         value = {this.state.answer}className="form-control"style={{background:"black",borderRight:"5px solid black",borderLeft:"2px solid black",borderTop:"2px solid black",color:"white",textAlign:"center",fontSize:"30px",borderBottom:"3px solid orange",width:"80%",marginLeft:"12.5%",borderRadius:"10px",marginTop:"15%"}} />
      </div>
    )
  }
  renderImageGender(){

    if(this.state.answer == "Male"){
      // var z = document.getElementById("com3");
      // console.log(z);
      // z.play();
      return <img src="./../digimon/backgrounds/male.png" className="gIcon"style={{width:"200px",height:"200px",marginLeft:"45%"}}/>
    }else if( this.state.answer == "Female"){
      // var z = document.getElementById("com3");
      // z.play();
        return <img src="./../digimon/backgrounds/female.png" className="gIcon"style={{width:"200px",height:"200px",marginLeft:"45%"}}/>
    }
  }
  renderDigimon(digimon){
    console.log(digimon);
    var output = [];
    var classer = "";
    digimon.map((digimon)=>{
      console.log(digimon);
      console.log(this.state.answer.name,digimon.name);
      if(this.state.answer == digimon){
        classer="active";
      }else{
        classer ="";
      }
      var classer2 = classer +" digimon";
      output.push(
        <div  className="col-3" digimon = {digimon}onClick={(event)=>{
          this.onChange(digimon);
        }}>
          <img className={classer2}src={digimon.still}style={{width:"200px",height:"200px"}} />
          <h2 className="nameD"style={{color:"white",marginLeft:"10%"}}>{digimon.name}</h2>
        </div>
      )
    })
    return <div className="row"style={{marginTop:"10%"}}><div className="col-2"></div>{output}</div>
  }
  renderGender(){
    return(
      <div >
        <div className="row">
          <div className="col-1"></div>
          <div className="col-4" onClick = {()=>{
            var z = document.getElementById("com3");
            z.play();
            this.onChange("Male");
          }}><h1 className="boy gg">Boy</h1></div>
          <div className="col-2"></div>
          <div className="col-4"onClick = {()=>{
            var z = document.getElementById("com3");
            z.play();
            this.onChange("Female");
          }}><h1 className="girl gg">Girl</h1></div>
          </div>
          <div className="row">
            {this.renderImageGender()}
            </div>
        </div>
          )
        }
  renderArrow(){
    if(this.state.answer){
      var output = [];

      for(var i =0; i< 14; i++){
        var classer = "arrow ar"+i;
        output.push(<img  onClick ={()=>   { document.querySelector("#com2").play(); this.changeState2()}} className={classer} style={{width:"5%",float:"right"}} src="./../digimon/backgrounds/arrows.gif"/>);

      }
      return output;
    }
  }
  changeState2(){
    var answer = this.state.answer;

    if(this.state.counter<this.state.questions.length){
      this.setState({counter:this.state.counter +1,answer:"",data: this.state.data.concat([answer])})
    }

  }
  render(){
    if(this.state.counter > 2){
      return <div>{this.props.end(this.state.data)}</div>
    }
    if(!this.state.flag){
    return(
      <div  className="starting">

          <audio id="com2">
          <source type="audio/mpeg" src="./../digimon/audio/magic.wav"/>
          </audio>
            <button className="loginButton btn btn-primary">Login</button>
            <img alt="k" src = "./../digimon/digimonlinks.png"className="digimonlink"/>
            <h1 className = "starthere"> Press Start </h1>
      </div>
    )
  }else if(this.state.flag){
    return  (
       <div >

         <audio id="com3">
           <source type="audio/mpeg" src="./../digimon/audio/magic.mp3"/>
         </audio>
         <audio id="com2">
            <source type="audio/mpeg" src="./../digimon/audio/computer.wav"/>
         </audio>
       <div className="questionContainer"style={{background:"black"}}>
         <h1 className="question"style={{textAlign:"center",color:"red",marginTop:"5%",fontFamily:"Titan One"}}>{this.state.questions[this.state.counter].question}</h1>
         {this.renderQuestions()}
       </div>
        <div style={{marginRight:"22.5%",marginTop:"10%"}}>
          {this.renderArrow()}

        </div>
      </div>
    )

    }
  }
}


export default StarterScreen;
