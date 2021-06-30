import './App.css';
import React from 'react';
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import LandingPage from "./shared/router/page/LandingPage/LandingPage";
import Dashboard from "./shared/router/page/Dashboard/Dashboard";
import Login from "./shared/router/page/Login/Login";

class App extends React.Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path='/' component={LandingPage} />
          <Route exact path='/dashboard' component={Dashboard} />
          <Route exact path='/dashboard/:action' component={Dashboard} />
          <Route exact path='/dashboard/:action/:courseId' component={Dashboard} />
          <Route exact path='/login/:action' component={Login} />
        </Switch>
      </Router>
    )
  }
}

export default App;
