import './DashboardSideNav.css';
import React from "react";
import {Link, useHistory} from "react-router-dom";

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

  render() {
    return (
      <div id="dashboardSideNavId" className="dashboardSideNav-root">
        <div className="dashboardSideNav-widthModifier" onClick={this.handleRetractMenu}>◄</div>
        <Link to="./home">home</Link><br/>
        <Link to="./course">course</Link><br/>
        <Link to="./create">create</Link><br/>
        <Link to="./explore">explore</Link><br/>
        <Link to="./manage">manage</Link><br/>
        <Link to="./achievement">achievement</Link><br/>
        <Link to="./profile">profile</Link><br/>
      </div>
    )
  }
}

export default DashboardSideNav;
