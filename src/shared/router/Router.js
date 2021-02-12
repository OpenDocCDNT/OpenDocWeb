import React from 'react';
import LandingPage from "./page/LandingPage/LandingPage";
import Navbar from "./page/Navbar/Navbar";

class Router extends React.Component {
  constructor(props) {
    super(props);
    this.changePage = this.changePage.bind(this)
    this.state = {
      activeRoute: <LandingPage/>,
      displayNav: false
    }
  }

  changePage(page) {
    if (page) {
      if (page !== <LandingPage/>) {
        this.setState({
          displayNav: true,
          activeRoute: page
        })
      } else {
        this.setState({
          displayNav: false,
          activeRoute: page
        })
      }
      return true;
    }
    return false;
  }

  render() {
    const displayNav = this.state.displayNav;
    let navDisplayer;
    if (displayNav) {
      navDisplayer = <Navbar/>
    }
    return (
      <div>
        {navDisplayer}
        {this.state.activeRoute}
      </div>
    )
  }
}

export default Router;
