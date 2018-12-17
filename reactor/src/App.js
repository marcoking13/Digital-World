import React, { Component } from 'react';
import "./css/index.css";
import "./css/menu.css";
import "./css/digiProfile.css";
import "./css/line.css";
import "./css/digimonMap.css";
import axios from "axios";
import DigimonMap from "./components/map_component";
import DigimonProfile from "./components/digimon_profile_component";
import DigimonLine from "./components/digivolve_line_component";
import Menu from "./components/player_menu_component.js";
import StarterScreen from "./components/starter_component.js";
class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      boo:false,
      profile:""
    }

this.end = this.end.bind(this);
  }
  end(data){
    var profile = {
      name:data[0],
      partner:data[2],
      digimon:[data[2]],
      gender:data[1],
      rank:"Bronze"
    }


    let ata = JSON.stringify(this.props.profile);

    const api = axios.create({baseURL: 'http://localhost:4000'});
    axios.post(`/api/profile`, {data:profile }).then(res => {
       console.log(res.config);

       console.log(res.config.params);

     }).catch((er)=>{console.log(er)});

     this.setState({boo:true,profile:profile});

  }
  componentDidUpdate(){

    //
    // console.log('login clicked')
    // let data = JSON.stringify(this.state.profile);
    // const api = axios.create({baseURL: 'http://localhost:4000'})
    // axios({
    //   url: '/api/profile',
    //   method: 'post',
    //   data: data
    // });


  }
  render() {

    if(!this.state.boo){
      return <StarterScreen end = {this.end} />;
    }else{
      return <Menu profile=  {this.state.profile}/>
    }
  }
}

export default App;
