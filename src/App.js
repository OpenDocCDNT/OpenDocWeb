import './App.css';
import React from 'react';
import {BrowserRouter as Router, Switch, Route, Link} from "react-router-dom";
import LandingPage from "./shared/router/page/LandingPage/LandingPage";
import Navbar from "./shared/router/page/Navbar/Navbar";
import Login from "./shared/router/page/Login/Login";

class App extends React.Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path='/' component={LandingPage} />
          <Route exact path='/login/:action' component={Login} />
        </Switch>
      </Router>
    )
  }
}

export default App;
