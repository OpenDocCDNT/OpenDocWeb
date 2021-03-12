import './DashboardExplore.css';
import React from "react";
import {useHistory} from "react-router-dom";

function DashboardExplore() {
  const history = useHistory();
  return <DashboardExploreComp history={history}/>
}

class DashboardExploreComp extends React.Component {

  render() {
    return (
      <div className="dashboardExplore-root">
        Explore
      </div>
    )
  }
}

export default DashboardExplore;
