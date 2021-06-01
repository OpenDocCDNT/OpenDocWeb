import "./DashboardHome.css";
import React from "react";
import { useHistory } from "react-router-dom";
import url from "../../../../utils/commonParameters.js";
import { fetchCreatorPost } from "../../../../utils/fetchCreator";
import {Link} from "react-router-dom";

let lessons = [];

function DashboardHome() {
  const history = useHistory();
  return <DashboardHomeComp history={history} />;
}

class DashboardHomeComp extends React.Component {
  
  constructor(props) {
    super(props);
    this.getTopLessons = this.getTopLessons.bind(this);
    this.state = {
      checked: false,
      lessons: [],
      search_string: "",
    };
    this.handleChange = this.handleChange.bind(this);
  }

  getTopLessons (){

    let params = {
    }
  
    fetchCreatorPost(url + '/lesson/topLesson', params)
    .then((response) => {
      console.log(response.statusCode)
      if (response === undefined) {
        return console.log("Erreur undefined");
      }
      if (response.statusCode === !200 && response.statusCode !== 418) {
        return console.log("Erreur 418 oo !200");
      }
      if (response.statusCode === 418) {
        return console.log("ok");
      }
      // SUCCESS
      this.setState( {
        lessons: response.responseBody.lessons
      })
      console.log("lessons => ");
      console.log(lessons);
      let lessonsId = lessons.map((lesson, i) => (
        console.log(JSON.stringify(lesson))
      ));
      //lessons.sort((a, b) => b.reputation-a.reputation);
      return lessons;
      
    })
    .catch(() => {
      return console.log("Erreur Final");
    });
  
  }

  handleChange(checked) {
    this.setState({ checked });
  }


  componentDidMount(){
    this.getTopLessons()
  }

  render() {
    let listLessons = this.state.lessons.map((lesson, i) => (
      <li key={lesson.id} className={"card" + i++ + " cardContent"}>
        <img className="cardHeader" src="" alt="cardHeader" />
        <h3 className="cardTitle">{lesson.label}</h3>
        <p className="cardReputation" id={lesson.reputation}>{i}</p>
      </li>
    ));
    

    let listLatestLessons = this.state.lessons.map((lesson, i) => (
      <li key={lesson.id} className={"card" + i++ + " cardContent"}>
        <img className="cardHeader" src="" alt="cardHeader" />
        <h3 className="cardTitle">{lesson.label}</h3>
      </li>
    ));

    return (
      <div className="dashboardHome-root">
        <h1 className="dashboardHome-title-home"> Bienvenue sur OpenDoc </h1>

        <div className="dashboardHome-square sq1">
          <h2 className="subTitle">TOP 5 Modules de cours</h2>
          <div className="squareContent gridCards">
            <ul>{listLessons}</ul>
          </div>
          <button className="viewAll" >          
            <Link to="/dashboard/explore" className="">View All</Link>
          </button>
        </div>

        <div className="dashboardHome-square sq2">
          <h2 className="subTitle">Dernier Modules de cours créé</h2>
          <div className="squareContent gridCards">
            <ul>{listLatestLessons}</ul>
          </div>
          <button className="viewAll">View All 2</button>
        </div>
      </div>
    );
  }
}
export default DashboardHome;
