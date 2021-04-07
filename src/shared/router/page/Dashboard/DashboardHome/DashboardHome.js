import "./DashboardHome.css";
import React from "react";
import { useHistory } from "react-router-dom";

function DashboardHome() {
  const history = useHistory();
  return <DashboardHomeComp history={history} />;
}

class DashboardHomeComp extends React.Component {
  render() {
    return (
      <div className="dashboardHome-root">
        <h1 className="dashboardHome-title-home"> Bienvenue sur OpenDoc </h1>
          <div className="dashboardHome-top-five"> 
            <h2 className="subTitle">
              TOP 5 Modules de cours
            </h2>
             
          </div>
          <div className="dashboardHome-latest">
            <h2 className="subTitle">
              Dernier Modules de cours créé
            </h2>
          </div>
      </div>
    );
  }
}

export default DashboardHome;
