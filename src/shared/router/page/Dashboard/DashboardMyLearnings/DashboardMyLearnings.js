import './DashboardMyLearnings.css';
import React from "react";
import {useHistory} from "react-router-dom";

function DashboardMyLearnings() {
  const history = useHistory();
  return <DashboardMyLearningsComp history={history}/>
}

class DashboardMyLearningsComp extends React.Component {

  render() {
    return (
      <div className="dashboardMyLearnings-root">
        MyLearnings
      </div>
    )
  }
}

export default DashboardMyLearnings;
