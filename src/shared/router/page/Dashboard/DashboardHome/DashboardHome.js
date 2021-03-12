import './DashboardHome.css';
import React from "react";
import {useHistory} from "react-router-dom";

function DashboardHome() {
  const history = useHistory();
  return <DashboardHomeComp history={history}/>
}

class DashboardHomeComp extends React.Component {

  render() {
    return (
      <div className="dashboardHome-root">
        Home
      </div>
    )
  }
}

export default DashboardHome;
