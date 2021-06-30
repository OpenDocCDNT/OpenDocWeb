import React from 'react';
import { Link } from 'react-router-dom';
import Add from '../../../../src/shared/img/svg/add.svg'
import './filter.css';


class filterAdd extends React.Component {
    render() {
        return (
            <Link to="../../../dashboard/create" className="dasboardExplore-filter">
                <div>
                    <img className="dasboardExplore-titleLogo-add" src={Add} alt="add" />
                    <h2> Créer votre cours </h2>
                </div>
            </Link>
        )
    }
}

export default filterAdd;