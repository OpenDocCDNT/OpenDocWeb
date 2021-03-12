import logo from './../../../img/svg/logo.svg';
import wave from './../../../img/svg/waves.svg';
import learn from './../../../img/svg/learn.svg';
import poop from './../../../img/svg/poop.svg';
import gotyou from './../../../img/svg/gotyou.svg';
import noads from './../../../img/svg/noads.svg';
import screenApp from './../../../img/svg/screenApp.svg';
import mobileAppChat from './../../../img/svg/mobileAppChat.svg';
import VCSdisplay from './../../../img/svg/VCSdisplay.svg';
import './LandingPage.css';
import React from "react";
import {Link, useHistory} from "react-router-dom";



function LandingPage() {
  const history = useHistory();
  return <LandingPageComponent history={history}/>
}

class LandingPageComponent extends React.Component {
  constructor(props) {
    super(props);
    this.handleDisconnect = this.handleDisconnect.bind(this);
    this.state = {
      isLogged : false,
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

  componentDidMount() {
    if (localStorage.getItem("token")) {
      this.setState({
        isLogged: true
      })
      this.props.history.push('/dashboard')
    }
  }

  handleDisconnect() {
    localStorage.removeItem("token");
    this.setState({
      isLogged: false
    })
  }


  render() {
    return (

      <div className="landingPage-root">
        <div className="landingPage-headTitle">
          <span className="landingPage-loginSignup">
            {
              this.state.isLogged ?
                <span onClick={this.handleDisconnect}>SE DECONNECTER</span>
                :
                <div><Link to="login/signin">LOGIN</Link> | <Link to="login/signup">REGISTER</Link></div>
            }
          </span>
          <img className="landingPage-titleLogo" src={logo} alt="OpenDoc"/>
        </div>
        <img className="landingPage-waveUnrotated" src={wave} alt="Wave"/>
        <div className="landingPage-whiteboard">
          <div className="landingPage-whiteboardCenterizer">
            {
              this.state.promoCards.map((promoCard, index) => <PromoCard svgSrc={this.state.promoCards[index].svgSrc} title={this.state.promoCards[index].title} cardText={this.state.promoCards[index].cardText}/>)
            }
          </div>
        </div>
        <img className="landingPage-waveRotated" src={wave} alt="Wave"/>
        <div className="landingPage-advantagesSection">
          <div className="landingPage-advantageUnit">
            <div className="landingPage-advantagePart">
              <div className="landingPage-textContainerLeft">
                Continuez d'apprendre peu importe où vous êtes avec l'application mobile OpenDoc !
              </div>
            </div>
            <div className="landingPage-advantagePart">
              <img className="landingPage-screenAppStyle" src={screenApp} alt="Wave"/>
            </div>
          </div>
          <div className="landingPage-advantageUnit">
            <div className="landingPage-advantagePart">
              <img className="landingPage-mobileAppStyle" src={mobileAppChat} alt="Wave"/>
            </div>
            <div className="landingPage-advantagePart">
              <div className="landingPage-textContainerRight">
                <p>Partagez avec d'autres OpenDockeurs autour d'un cours grâce à une messagerie instantanée.</p>

                <p>Suivez vos OpenDockeurs favoris et soyez avertis lorsqu'un nouveau cours est disponible !</p>
              </div>
            </div>
          </div>
          <div className="landingPage-advantageUnit">
            <div className="landingPage-advantagePart">
              <div className="landingPage-textContainerLeft">
                Continuez d'apprendre peu importe où vous êtes avec l'application mobile OpenDoc !
              </div>
            </div>
            <div className="landingPage-advantagePart">
              <img className="landingPage-screenAppStyle" src={VCSdisplay} alt="Wave"/>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

function PromoCard(props) {
  return (
    <div className="landingPage-promoCard-cardContainer">
      <div className="landingPage-promoCard-cardTitle">{props.title}</div>
      <div className="landingPage-promoCard-cardText">{props.cardText}</div>
      <img className="landingPage-promoCard-cardImg" src={props.svgSrc} alt="Wave"/>
    </div>
  )
}

export default LandingPage;
