import React, { Component } from 'react';
import "./css/index.css";
import "./css/menu.css";
import "./css/line.css";
import DigimonLine from "./components/digivolve_line_component";
import Menu from "./components/player_menu_component.js";
import StarterScreen from "./components/starter_component.js";
class App extends Component {
  render() {
    var boo = false;
    if(!boo){
      return <StarterScreen />
    }else if (boo){
      return <Menu />
    }
  }
}

export default App;
