import './DashboardManageCourse.css';
import React from "react";
import {useHistory} from "react-router-dom";

function DashboardManageCourse() {
  const history = useHistory();
  return <DashboardManageCourseComp history={history}/>
}

class DashboardManageCourseComp extends React.Component {

  render() {
    return (
      <div className="dashboardManageCourse-root">
        ManageCourse
      </div>
    )
  }
}

export default DashboardManageCourse;
