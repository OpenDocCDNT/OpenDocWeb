import React from "react";
import {Link, useHistory} from "react-router-dom";
import '../Cart/cart.css';
import html from  '../../img/jpg/htmlcss.jpg'
import Heart from '../../img/svg/heart.svg'

function CartLesson() {
    const history = useHistory();
    return <Cart history={history}/>
}


class Cart extends React.Component {
    render() {
        return (
            <div className="cartLesson-block">
                <Link to ="#" className="cartLesson-link">
                    <img src={html} alt="TitleCours" className="cartLesson-img"></img>
                    <h1 className="cartLesson-title"> Title Cart Lesson</h1>
                    <div className="cartLesson-info">
                        <h2 className="cartLesson-auteur"> Auteur </h2>
                        <span className="cartLesson-like">  <img className="dasboardExplore-titleLogo-heart" src={Heart} alt="add"/> 536 </span>
                    </div>
                </Link>
            </div>        
        )
    }
}



export default CartLesson;
