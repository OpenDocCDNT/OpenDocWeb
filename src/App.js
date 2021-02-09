import logo from './shared/img/svg/logo.svg';
import wave from './shared/img/svg/waves.svg';
import learn from './shared/img/svg/learn.svg';
import poop from './shared/img/svg/poop.svg';
import gotyou from './shared/img/svg/gotyou.svg';
import noads from './shared/img/svg/noads.svg';
import './App.css';
import React from "react";

function PromoCard(props) {
  return (
    <div className="home-promoCard-cardContainer">
      <div className="home-promoCard-cardTitle">{props.title}</div>
      <div className="home-promoCard-cardText">{props.cardText}</div>
      <img className="home-promoCard-cardImg" src={props.svgSrc} alt="Wave"/>
    </div>
  )
}

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      promoCards: [
        {
          svgSrc: learn,
          title: "Apprennez",
          cardText: "Notre objectif est de vous permettre d'apprendre ce que vous souhaitez"
        },
        {
          svgSrc: gotyou,
          title: "Créez",
          cardText: "Partagez votre savoir à l'aide d'un éditeur de cours avancé"
        },
        {
          svgSrc: poop,
          title: "No bullshit",
          cardText: "La notation des cours par les OpenDockeurs assure une mise en avant des cours de qualité"
        },
        {
          svgSrc: noads,
          title: "Sans pub !",
          cardText: "OpenDoc est là pour vous permettre d'apprendre gratuitement et sans pubs !"
        }
      ]
    }
  }

  render() {
    return (
      <div className="App">
        <div className="headTitle">
          <img className="titleLogo" src={logo} alt="OpenDoc"/>
        </div>
        <img className="waveUnrotated" src={wave} alt="Wave"/>
        <div className="whiteboard">
          <div className="whiteboardCenterizer">
            {
              this.state.promoCards.map((promoCard, index) => <PromoCard svgSrc={this.state.promoCards[index].svgSrc} title={this.state.promoCards[index].title} cardText={this.state.promoCards[index].cardText}/>)
            }
          </div>
        </div>
        <img className="waveRotated" src={wave} alt="Wave"/>
        <div className="advantagesSection">
          <div className="advantageUnit">
            <div className="advantagePart">
              <div className="textContainer">
                Continuez d'apprendre peu importe où vous êtes avec l'application mobile OpenDoc !
              </div>
            </div>
            <div className="advantagePart">

            </div>
          </div>
          <div className="advantageUnit">
            <div className="advantagePart">

            </div>
            <div className="advantagePart">

            </div>
          </div>
          <div className="advantageUnit">
            <div className="advantagePart">

            </div>
            <div className="advantagePart">

            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default App;
