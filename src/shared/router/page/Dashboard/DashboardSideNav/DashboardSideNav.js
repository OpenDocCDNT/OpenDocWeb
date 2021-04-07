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
    this.defaultFullNavWidth = 320;
    this.defaultRetractedNavWidth = 45;
    this.defaultLogo = logo;
    this.defaultRetractedLogo = logoRetracted;
    this.defaultArrow = "◄";
    this.defaultRetractedArrow = "►";

    


    this.defaultLessonTxt = "Liste des cours";
    this.defaultCreateLessonTxt = "Créer un cours";
    this.defaultExploreTxt = "Explore ?";
    this.defaultMyLessonTxt = "Gérer ses modules (gérer ses cours)";
    this.defaultAchievementTxt = "Achievement? (Ma progression ?)";
    this.defaultMyAccountTxt = "Mon compte";
    
    this.defaultRetractedLessonTxt = <img src={logoLesson} alt="defaultRetractedLessonTxt"/>;
    this.defaultRetractedCreateLessonTxt = <img src={logoCreate} alt="defaultRetractedCreateLessonTxt"/>;
    this.defaultRetractedExploreTxt = <img src={LogoExplore} alt="defaultRetractedExploreTxt"/>;
    this.defaultRetractedMyLessonTxt = <img src={LogoMyLesson} alt="defaultRetractedMyLessonTxt"/>;
    this.defaultRetractedAchievementTxt = <img src={logoAchievement} alt="defaultRetractedAchievementTxt"/>;
    this.defaultRetractedMyAccountTxt = <img src={logoMyAccount} alt="defaultRetractedMyAccountTxt"/>;
    
    this.state = {
      navWidth: this.defaultFullNavWidth,
      navLogo: this.defaultLogo,
      navArrow: this.defaultArrow,

      navListLesson: this.defaultLessonTxt,
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
    dashboardSideNav.style.width = this.state.navWidth + "px";
  }

  componentDidMount() {
    const dashboardSideNav = document.getElementById("dashboardSideNavId");
    dashboardSideNav.style.width = this.state.navWidth + "px";
  }

  handleRetractMenu() {
    if (this.state.isNavRetracted) {
      this.setState({
        navWidth:this.defaultFullNavWidth,
        navLogo: this.defaultLogo,
        navListLesson: this.defaultLessonTxt,
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
              <img src={this.state.navLogo} alt="OpenDoc"/>
          </Link> 

        <div className="dashboardSideNav-tabs">
          <Link to="/dashboard/course" className="dashboardSideNav-tabs-element item1">{this.state.navListLesson}</Link><br/>
          <Link to="/dashboard/create" className="dashboardSideNav-tabs-element item2">{this.state.navCreateLesson}</Link><br/>
          <Link to="/dashboard/explore" className="dashboardSideNav-tabs-element item3">{this.state.navExplore}</Link><br/>
          <Link to="/dashboard/manage" className="dashboardSideNav-tabs-element item4">{this.state.navMyLesson}</Link><br/>
          <Link to="/dashboard/achievement" className="dashboardSideNav-tabs-element item5">{this.state.navAchievement}</Link><br/>
          <Link to="/dashboard/profile" className="dashboardSideNav-tabs-element item6">{this.state.navMyAccount}</Link><br/>
        </div>
      </div>
    )
  }
}

export default DashboardSideNav;
