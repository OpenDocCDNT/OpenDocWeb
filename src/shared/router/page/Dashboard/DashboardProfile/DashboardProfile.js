import './DashboardProfile.css';
import React from "react";
import {useHistory} from "react-router-dom";

function DashboardProfile() {
  const history = useHistory();
  return <DashboardProfileComp history={history}/>
}

class DashboardProfileComp extends React.Component {

  render() {
    return (
      <div className="dashboardDashboardProfile-root">
        Profile
      </div>
    )
  }
}

export default DashboardProfile;
