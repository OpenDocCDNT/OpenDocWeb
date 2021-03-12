import './Dashboard.css';
import React from "react";
import {useHistory, useParams} from "react-router-dom";

function Dashboard(){
  const {action} = useParams();
  const history = useHistory();
  return <DashboardComponent hisory={history}/>
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
      setTimeout(() => {
        this.props.hisory.push('/')
      }, 3000)
    } else {
      this.setState({
        logged: true
      })
    }
  }

  render() {
    return (
      <div className="dashboardPage-root">
        {
          this.state.logged ?
            <span>Seems like you're logged</span>
            :
            <span>Not logged :( Redirect to home soon</span>
        }
      </div>
    )
  }
}

export default Dashboard;
