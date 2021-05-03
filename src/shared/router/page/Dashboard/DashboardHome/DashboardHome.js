import "./DashboardHome.css";
import React from "react";
import { useHistory } from "react-router-dom";
import url from "../../../../utils/commonParameters.js";
import { fetchCreatorPost } from "../../../../utils/fetchCreator";

var lessons = [
  {
    id: 1,
    label: "test1",
    description:
      "test descriptiondescriptiondescriptiondescriptiondescriptiondescriptiondescriptiondescriptiondescriptiondescriptiondescriptiondescriptiondescriptiondescription",
    publishDate: "2021-04-03T15:47:52.000Z",
    lastEditedDate: null,
    reputation: 12,
    userId: 1,
  },
  {
    id: 2,
    label: "test4",
    description: "test",
    publishDate: "2021-04-11T15:48:41.000Z",
    lastEditedDate: null,
    reputation: 32,
    userId: 1,
  },
  {
    id: 3,
    label: "test3",
    description: "description",
    publishDate: "2021-04-22T15:49:58.000Z",
    lastEditedDate: null,
    reputation: 2,
    userId: 1,
  },
  {
    id: 4,
    label: "test2",
    description: "test description",
    publishDate: "2021-04-05T15:58:59.000Z",
    lastEditedDate: null,
    reputation: 67,
    userId: 1,
  },
  {
    id: 5,
    label: "test22131",
    description: "test description",
    publishDate: "2021-04-12T15:59:13.000Z",
    lastEditedDate: null,
    reputation: 15,
    userId: 1,
  },
];

lessons.sort((a, b) => b.reputation-a.reputation);


const listLessons = lessons.map((lesson, i) => (
  <li className={"card" + i++ + " cardContent"}>
    <img className="cardHeader" src="" alt="cardHeader" />
    <h3 className="cardTitle">{lesson.label}</h3>
    <p className="cardReputation">{lesson.reputation}</p>
  </li>
));

const listLatestLessons = lessons.map((lesson, i) => (
  <li className={"card" + i++ + " cardContent"}>
    <img className="cardHeader" src="" alt="cardHeader" />
    <h3 className="cardTitle">{lesson.label}</h3>
  </li>
));

function DashboardHome() {
  const history = useHistory();
  return <DashboardHomeComp history={history} />;
}



class DashboardHomeComp extends React.Component {
  
  constructor(props) {
    super(props);
    this.state = {
      checked: false,
      lessonList: [],
      search_string: "",
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(checked) {
    this.setState({ checked });
  }

  getLessons() {
    fetchCreatorPost(url + "/lesson/topLesson")
      .then((response) => {
        if (response === undefined) {
          return console.log("Erreur undefined");
        }
        if (response.statusCode === !200 && response.statusCode !== 418) {
          return console.log("Erreur 418 oo !200");
        }
        if (response.statusCode === 418) {
          return console.log("ok");
        }
        //SUCCESS
        return console.log(response.json);
      })
      .catch(() => {
        return console.log("Erreur Final");
      });
  }

  render() {
    return (
      <div className="dashboardHome-root">
        <h1 className="dashboardHome-title-home"> Bienvenue sur OpenDoc </h1>

        <div className="dashboardHome-square sq1">
          <h2 className="subTitle">TOP 5 Modules de cours</h2>
          <div className="squareContent gridCards">
            <ul>{listLessons}</ul>
          </div>
          <button className="viewAll">View All 1</button>
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
