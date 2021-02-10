import logo from './shared/img/svg/logo.svg';
import wave from './shared/img/svg/waves.svg';
import learn from './shared/img/svg/learn.svg';
import poop from './shared/img/svg/poop.svg';
import gotyou from './shared/img/svg/gotyou.svg';
import noads from './shared/img/svg/noads.svg';
import screenApp from './shared/img/svg/screenApp.svg';
import mobileAppChat from './shared/img/svg/mobileAppChat.svg';
import VCSdisplay from './shared/img/svg/VCSdisplay.svg';
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
              <div className="textContainerLeft">
                Continuez d'apprendre peu importe où vous êtes avec l'application mobile OpenDoc !
              </div>
            </div>
            <div className="advantagePart">
              <img className="screenAppStyle" src={screenApp} alt="Wave"/>
            </div>
          </div>
          <div className="advantageUnit">
            <div className="advantagePart">
              <img className="mobileAppStyle" src={mobileAppChat} alt="Wave"/>
            </div>
            <div className="advantagePart">
              <div className="textContainerRight">
                <p>Partagez avec d'autres OpenDockeurs autour d'un cours grâce à une messagerie instantanée.</p>

                <p>Suivez vos OpenDockeurs favoris et soyez avertis lorsqu'un nouveau cours est disponible !</p>
              </div>
            </div>
          </div>
          <div className="advantageUnit">
            <div className="advantagePart">
              <div className="textContainerLeft">
                Continuez d'apprendre peu importe où vous êtes avec l'application mobile OpenDoc !
              </div>
            </div>
            <div className="advantagePart">
              <img className="screenAppStyle" src={VCSdisplay} alt="Wave"/>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default App;
