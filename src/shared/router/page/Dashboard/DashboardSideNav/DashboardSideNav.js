import './DashboardSideNav.css';
import React from "react";
import {Link, useHistory} from "react-router-dom";
import logo from './../../../../img/svg/logo.svg';
import logoRetracted from './../../../../img/svg/logo3.svg';

function DashboardSideNav() {
  const history = useHistory();
  return <DashboardSideNavComp history={history}/>
}

class DashboardSideNavComp extends React.Component {
  constructor(props) {
    super(props);
    this.handleRetractMenu = this.handleRetractMenu.bind(this);
    this.defaultFullNavWidth = 320;
    this.defaultRetractedNavWidth = 40;
    this.defaultLogo = logo;
    this.defaultRetractedLogo = logoRetracted;
    this.state = {
      navWidth: this.defaultFullNavWidth,
      navLogo: this.defaultLogo,
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
        navWidth: this.defaultLogo,
        isNavRetracted: false
      })
    } else {
      this.setState({
        navWidth: this.defaultRetractedNavWidth,
        navLogo: this.defaultRetractedLogo,
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
          ◄
        </div>
        <div className="dashboardSideNav-titleLogo-Nav">
          <Link to="/">
              <img src={this.state.navLogo} alt="OpenDoc"/>
          </Link>
        </div>  
        <div className="dashboardSideNav-tabs">
          <Link to="/dashboard/course" className="dashboardSideNav-tabs-element">Liste des cours</Link><br/>
          <Link to="/dashboard/create" className="dashboardSideNav-tabs-element">Créer un cours</Link><br/>
          <Link to="/dashboard/explore" className="dashboardSideNav-tabs-element">Explore ?</Link><br/>
          <Link to="/dashboard/manage" className="dashboardSideNav-tabs-element">Gérer ses modules (gérer ses cours)</Link><br/>
          <Link to="/dashboard/achievement" className="dashboardSideNav-tabs-element">Achievement? (Ma progression ?)</Link><br/>
          <Link to="/dashboard/profile" className="dashboardSideNav-tabs-element">Mon compte</Link><br/>
        </div>
      </div>
    )
  }
}

export default DashboardSideNav;
