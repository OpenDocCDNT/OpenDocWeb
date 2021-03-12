import './DashboardSideNav.css';
import React from "react";
import {Link, useHistory} from "react-router-dom";
import logo from './../../../../img/svg/logo.svg';

function DashboardSideNav() {
  const history = useHistory();
  return <DashboardSideNavComp history={history}/>
}

class DashboardSideNavComp extends React.Component {
  constructor(props) {
    super(props);
    this.handleRetractMenu = this.handleRetractMenu.bind(this);
    this.defaultFullNavWidth = 250;
    this.defaultRetractedNavWidth = 30;
    this.state = {
      navWidth: this.defaultFullNavWidth,
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
        navWidth: this.defaultFullNavWidth,
        isNavRetracted: false
      })
    } else {
      this.setState({
        navWidth: this.defaultRetractedNavWidth,
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
        <div className="dashboardSideNav-widthModifier" onClick={this.handleRetractMenu}>◄</div>
         
        <Link to="./home">
          <img className="dashboardSideNav-titleLogo-Nav" src={logo} alt="OpenDoc"/>
        </Link>
        <br/><br/>
        <div className="dashboardSideNav-tabs">
        <Link to="./course" className="dashboardSideNav-tabs-element">Liste des cours</Link><br/>
        <Link to="./create" className="dashboardSideNav-tabs-element">Créer un cours</Link><br/>
        <Link to="./explore" className="dashboardSideNav-tabs-element">Explore ?</Link><br/>
        <Link to="./manage" className="dashboardSideNav-tabs-element">Gérer ses modules (gérer ses cours)</Link><br/>
        <Link to="./achievement" className="dashboardSideNav-tabs-element">Achievement? (Ma progression ?)</Link><br/>
        <Link to="./profile" className="dashboardSideNav-tabs-element">Mon compte</Link><br/>
        </div>

      </div>
    )
  }
}

export default DashboardSideNav;
