import './DashboardCreateCourse.css';
import React from "react";
import {useHistory} from "react-router-dom";

function DashboardCreateCourse() {
  const history = useHistory();
  return <DashboardCreateCourseComp history={history}/>
}

class DashboardCreateCourseComp extends React.Component {

  render() {
    return (
      <div className="dashboardCreateCourse-root">
        CreateCourse
      </div>
    )
  }
}

export default DashboardCreateCourse;
