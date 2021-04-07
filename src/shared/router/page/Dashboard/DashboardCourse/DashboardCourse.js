import './DashboardCourse.css';
import React from "react";
import {useHistory} from "react-router-dom";

function DashboardCourse() {
  const history = useHistory();
  return <DashboardCourseComp history={history}/>
}

class DashboardCourseComp extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div id="threeContainer" className="dashboardCourse-root">
      </div>
    )
  }
}

export default DashboardCourse;
