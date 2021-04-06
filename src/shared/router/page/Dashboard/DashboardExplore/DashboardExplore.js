import './DashboardExplore.css';
import React from "react";
import Switch from "react-switch";
import { useHistory } from "react-router-dom";
import {fetchCreatorPost} from "../../../../utils/fetchCreator";
import Cart from '../../../../utils/Cart/cart.js';
import Add from './../../../../img/svg/add.svg';
import Filter from './../../../../img/svg/filter.svg';


function DashboardExplore() {
  const history = useHistory();
  return <DashboardExploreComp history={history} />
}

class DashboardExploreComp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      checked: false ,
      lessonList: [],
      search_string: ""
    };
      this.handleChange = this.handleChange.bind(this);
  }

  handleChange(checked) {
    this.setState({ checked });
}

  getLessons() {
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
      return console.log('lessonList');

    })
    .catch(() => {
        return console.log('Erreur Final')
    })
  }

  render() {
    return (
      <div className="dashboardExplore-root">
        <div className="dashboardExplore-title">
          <h1>Choisissez un cours </h1>
          <p>Bienvenue dans notre vaste bibliothèque de cours en ligne. Cliquez sur un cours afin d'accéder à son contenu.</p>
        </div>

        <div className="dashboardExplore-filterGroup">
          <div className="dasboardExplore-filter">
            <input id="name" type="text" placeholder="Entrez un mot clé, cours, thèmes"/> <img className="dasboardExplore-titleLogo-filter" src={Filter} alt="add"/>
          </div>
          <div className="dasboardExplore-filter">
            <Switch onChange={this.handleChange} checked={this.state.checked} height={20} width={40} checkedIcon={false} uncheckedIcon={false} />
            <h2> Maquer les cours que j'ai terminer  </h2>
          </div>
          <div className="dasboardExplore-filter">
            <img className="dasboardExplore-titleLogo-add" src={Add} alt="add"/>
            <h2> Créer votre cours </h2>
          </div>
        </div>

        <div className="dashboardExplore-lessonGroup">
          {this.state.lessonList.map((item, key) => {
            return (
              <p> {item.label}</p>
            );
          })}
            <Cart />
            <Cart />
            <Cart />
            <Cart />
            <Cart />
            <Cart />
        </div>

      </div>
    )
  }
}

export default DashboardExplore;