import './DashboardCourse.css';
import React from "react";
import {useHistory} from "react-router-dom";

function DashboardCourse() {
  const history = useHistory();
  return <DashboardCourseComp history={history}/>
}

class DashboardCourseComp extends React.Component {

  render() {
    return (
      <div className="dashboardCourse-root">
        Course
      </div>
    )
  }
}

export default DashboardCourse;
