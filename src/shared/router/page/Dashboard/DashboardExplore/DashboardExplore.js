import './DashboardExplore.css';
import React from "react";
import { useHistory } from "react-router-dom";
import {fetchCreatorPost} from "../../../../utils/fetchCreator";
import Cart from '../../../../utils/Cart/cart.js';
import FilterAdd from '../../../../utils/Filter/filterAdd.js';
import FilterSearch from '../../../../utils/Filter/filterSearch.js';
import FilterSwitch from '../../../../utils/Filter/filterSwitch.js';

function DashboardExplore() {
  const history = useHistory();
  return <DashboardExploreComp history={history} />
}

class DashboardExploreComp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      lessonList: [],    
    };
  }

  componentDidMount() {
    fetchCreatorPost('http://127.0.0.1:8080/api/lesson/getAll')
    .then(response => {
      if(response === undefined) {
        return console.log('Erreur undefined');
      } 
      if(response.statusCode === !200 && response.statusCode !== 418) {
        return console.log('Erreur 418 oo !200');
      }
      if(response.statusCode === 418) {
        return console.log('ok');
      }
      //SUCCESS
      this.setState({lessonList: response.responseBody.lessons})
    })
    .catch(() => {
        return console.log('Erreur Final');
    })
  }


  render() {
    const lesson = this.state.lessonList.map(function(lesson) { 
      const label = lesson.label;
      const auteur = lesson.userId;
      return <Cart key={lesson.id} labelLesson={label} auteurLesson={auteur} ></Cart>
    })

    return (
      <div className="dashboardExplore-root">
        <div className="dashboardExplore-title">
          <h1>Choisissez un cours </h1>
          <p>Bienvenue dans notre vaste bibliothèque de cours en ligne. Cliquez sur un cours afin d'accéder à son contenu.</p>
        </div>
       

        <div className="dashboardExplore-filterGroup">
          <FilterSearch />
          <FilterSwitch />
          <FilterAdd />
        </div>


        <div className="dashboardExplore-lessonGroup">
          {lesson}
        </div>
      </div>
    )
  }
}

export default DashboardExplore;