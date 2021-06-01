import React from "react";
import {Link, useHistory} from "react-router-dom";
import '../Cart/cart.css';
import html from  '../../img/jpg/htmlcss.jpg'
import Heart from '../../img/svg/heart.svg'

function CartLesson(props) {
    const history = useHistory();
    return <Cart history={history} labelLesson={props.labelLesson} auteurLesson={props.auteurLesson} />
}

class Cart extends React.Component {
    constructor(props){
        super(props);
        this.state = {
          };
    }
    
    render() {
        return (
            <div className="cartLesson-block">
                <Link to ="#" className="cartLesson-link">
                    <img src={html} alt="TitleCours" className="cartLesson-img"></img>
                    <h1 className="cartLesson-title"> {this.props.labelLesson} </h1>
                    <div className="cartLesson-info">
                        <h2 className="cartLesson-auteur"> {this.props.auteurLesson} </h2>
                        <span className="cartLesson-like">  <img className="dasboardExplore-titleLogo-heart" src={Heart} alt="add"/> 536 </span>
                    </div>
                </Link>
            </div>        
        )
    }

}


export default CartLesson;
