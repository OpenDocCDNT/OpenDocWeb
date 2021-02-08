import logo from './shared/img/svg/logo.svg';
import wave from './shared/img/svg/waves.svg';
import './App.css';
import React from "react";

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <div className="headTitle">
          <img className="titleLogo" src={logo} alt="OpenDoc"/>
        </div>
        <img className="waveUnrotated" src={wave} alt="Wave"/>
        <div className="whiteboard">

        </div>
        <img className="waveRotated" src={wave} alt="Wave"/>
      </div>
    )
  }
}

export default App;
