import './Dashboard.css';
import React from "react";
import { useParams, useHistory } from "react-router-dom";
import DashboardSideNav from "./DashboardSideNav/DashboardSideNav";
import DashboardCourse from "./DashboardCourse/DashboardCourse";
import DashboardCreateCourse from "./DashboardCreateCourse/DashboardCreateCourse";
import DashboardExplore from "./DashboardExplore/DashboardExplore";
import DashboardManageCourse from "./DashboardManageCourse/DashboardManageCourse";
import DashboardMyLearnings from "./DashboardMyLearnings/DashboardMyLearnings";
import DashboardProfile from "./DashboardProfile/DashboardProfile";
import DashboardHome from "./DashboardHome/DashboardHome";
import {fetchCreatorPost} from "../../../utils/fetchCreator";

function Dashboard() {
  const { action } = useParams();
  const history = useHistory();
  let dashboardPage = <DashboardHome/>
  if (action === "course") {
    dashboardPage = <DashboardCourse/>
  } else if (action === "create") {
    dashboardPage = <DashboardCreateCourse/>
  } else if (action === "explore") {
    dashboardPage = <DashboardExplore/>
  } else if (action === "manage") {
    dashboardPage = <DashboardManageCourse/>
  } else if (action === "achievement") {
    dashboardPage = <DashboardMyLearnings/>
  } else if (action === "profile") {
    dashboardPage = <DashboardProfile/>
  }
  return <DashboardComponent history={history} dashboardPage={dashboardPage}/>
}

class DashboardComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      logged: false
    }
  }

  componentDidMount() {
    if (!localStorage.getItem("token")) {
      this.props.history.push('/')
    } else {

      fetchCreatorPost('http://127.0.0.1:8080/api/auth/isTokenValid', {token: localStorage.getItem('token')})
        .then(response => {
          if (response === undefined) {
            localStorage.removeItem("token");
            this.props.history.push('/');
          }
          if (response.statusCode !== 200) {
            localStorage.removeItem("token");
            this.props.history.push('/');
          }
        })
        .catch(() => {
          localStorage.removeItem("token");
          this.props.history.push('/');
        })
      this.setState({
        logged: true,
      })
    }
  }

  render() {

    return (
      <div className="dashboardPage-root">
        <DashboardSideNav/>
        {this.props.dashboardPage}
      </div>
    )
  }
}

export default Dashboard;
