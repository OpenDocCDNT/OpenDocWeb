import './DashboardSideNav.css';
import React from "react";
import {Link, useHistory} from "react-router-dom";
import logo from './../../../../img/svg/logo.svg';
import logoRetracted from './../../../../img/svg/logo3.svg';

import logoLesson from './../../../../img/svg/Picture1.svg';
import LogoExplore from './../../../../img/svg/Picture1.svg';
import LogoMyLesson from './../../../../img/svg/Picture1.svg';
import logoCreate from './../../../../img/svg/Picture2.svg';
import logoAchievement from './../../../../img/svg/Picture4.svg';
import logoMyAccount from './../../../../img/svg/Picture3.svg';

function DashboardSideNav() {
  const history = useHistory();
  return <DashboardSideNavComp history={history}/>
}

class DashboardSideNavComp extends React.Component {


  constructor(props) {
    super(props);
    this.handleRetractMenu = this.handleRetractMenu.bind(this);
    this.defaultFullNavWidth = 25;
    this.defaultRetractedNavWidth = 5;
    this.defaultLogo = logo;
    this.defaultRetractedLogo = logoRetracted;
    this.defaultArrow = "◄";
    this.defaultRetractedArrow = "►";

  
    this.defaultCreateLessonTxt = "Créer un cours";
    this.defaultExploreTxt = "Explore ?";
    this.defaultMyLessonTxt = "Gérer ses modules (gérer ses cours)";
    this.defaultAchievementTxt = "Achievement? (Ma progression ?)";
    this.defaultMyAccountTxt = "Mon compte";
    
    this.defaultRetractedLessonTxt = <img className="imgNav" src={logoLesson} alt="defaultRetractedLessonTxt"/>;
    this.defaultRetractedCreateLessonTxt = <img className="imgNav"  src={logoCreate} alt="defaultRetractedCreateLessonTxt"/>;
    this.defaultRetractedExploreTxt = <img className="imgNav"  src={LogoExplore} alt="defaultRetractedExploreTxt"/>;
    this.defaultRetractedMyLessonTxt = <img className="imgNav"  src={LogoMyLesson} alt="defaultRetractedMyLessonTxt"/>;
    this.defaultRetractedAchievementTxt = <img className="imgNav"  src={logoAchievement} alt="defaultRetractedAchievementTxt"/>;
    this.defaultRetractedMyAccountTxt = <img className="imgNav"  src={logoMyAccount} alt="defaultRetractedMyAccountTxt"/>;
    
    this.state = {
      navWidth: this.defaultFullNavWidth,
      navLogo: this.defaultLogo,
      navArrow: this.defaultArrow,

      navMyAccount: this.defaultMyAccountTxt,
      navAchievement: this.defaultAchievementTxt,
      navCreateLesson: this.defaultCreateLessonTxt,
      navExplore: this.defaultExploreTxt,
      navMyLesson: this.defaultMyLessonTxt,
      isNavRetracted: false
    }
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    const dashboardSideNav = document.getElementById("dashboardSideNavId");
    dashboardSideNav.style.width = this.state.navWidth + "vw";
  }

  componentDidMount() {
    const dashboardSideNav = document.getElementById("dashboardSideNavId");
    dashboardSideNav.style.width = this.state.navWidth + "vw";
  }

  handleRetractMenu() {
    if (this.state.isNavRetracted) {
      this.setState({
        navWidth:this.defaultFullNavWidth,
        navLogo: this.defaultLogo,
        navMyAccount: this.defaultMyAccountTxt,
        navAchievement: this.defaultAchievementTxt,
        navCreateLesson: this.defaultCreateLessonTxt,
        navExplore: this.defaultExploreTxt,
        navMyLesson: this.defaultMyLessonTxt,
        navArrow: this.defaultArrow,
        isNavRetracted: false
      })
    } else {
      this.setState({
        navWidth: this.defaultRetractedNavWidth,
        navLogo: this.defaultRetractedLogo,
        navListLesson: this.defaultRetractedLessonTxt,
        navMyAccount: this.defaultRetractedMyAccountTxt,
        navAchievement: this.defaultRetractedAchievementTxt,
        navCreateLesson: this.defaultRetractedCreateLessonTxt,
        navExplore: this.defaultRetractedExploreTxt,
        navMyLesson: this.defaultRetractedMyLessonTxt,
        navArrow: this.defaultRetractedArrow,
        isNavRetracted: true
      })
    }
  }

  /** 
   * 
   * mis sur home Etant donné que la page d'acceuil c'est la liste des cours nan ?
   *  
  **/
  render() {
    return (
      <div id="dashboardSideNavId" className="dashboardSideNav-root">
        <div className="dashboardSideNav-widthModifier" onClick={this.handleRetractMenu}> 
          {this.state.navArrow}
        </div>
          <Link className="dashboardSideNav-titleLogo-Nav" to="/">
              <img className="imgNav imgNavLogo"  src={this.state.navLogo} alt="OpenDoc"/>
          </Link> 

        <div className="dashboardSideNav-tabs">
          <Link to="/dashboard/create" className="dashboardSideNav-tabs-element item1">{this.state.navCreateLesson}</Link><br/>
          <Link to="/dashboard/explore" className="dashboardSideNav-tabs-element item2">{this.state.navExplore}</Link><br/>
          <Link to="/dashboard/manage" className="dashboardSideNav-tabs-element item3">{this.state.navMyLesson}</Link><br/>
          <Link to="/dashboard/achievement" className="dashboardSideNav-tabs-element item4">{this.state.navAchievement}</Link><br/>
          <Link to="/dashboard/profile" className="dashboardSideNav-tabs-element item5">{this.state.navMyAccount}</Link><br/>
          </div>
      </div>
    )
  }
}
// <Link to="/dashboard/profile" className="dashboardSideNav-tabs-element item7">{this.state.navMyAccount}</Link><br/>
export default DashboardSideNav;
