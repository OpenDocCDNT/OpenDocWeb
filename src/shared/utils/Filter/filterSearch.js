import React from "react";
import {fetchCreatorPost} from "../fetchCreator";
import { useState, useEffect} from 'react';
import Filter from '../../../../src/shared/img/svg/filter.svg';
import './filter.css';

function Search() {
    const [datas, SetDatas] = useState([]);
    const [searchTerm, setSearchTerm] = useState("");

    // useEffect(() => {
    //     fetchCreatorPost('http://127.0.0.1:8080/api/lesson/getAll')
    //         .then((response) => response.json())
    //         .then((json) => console.log(json));
    // }, []);

    useEffect(() => {
        fetchCreatorPost('http://127.0.0.1:8080/api/lesson/getAll')
            .then((response) => response.json())
            .then((data) => {
                console.log(data.item.forEach( lesson => {
                    <p> {lesson.label}</p>
                }))
            })
        }, []);
            
            // .then((response) => response.json())
            // .then((json) => SetDatas(json));
    // }, []);

    const handleSearchTerm = (e) => {
        let value = e.target.value;
        value.lenght > 2 && setSearchTerm(value);
    };

    console.log(searchTerm);

    return (
        <div className="dasboardExplore-filter">
            <input id="searchBar" name="searchBar" type="text" placeholder="Entrez un mot clé, cours, thèmes" onChange={handleSearchTerm}/>
            <img className="dasboardExplore-titleLogo-filter" src={Filter} alt="add" />

            <div> 
                {datas
                    .filter((val) => {
                        return val.tille.toLowerCase().include(searchTerm.toLowerCase());
                    })
                    .map((val) => {
                        return (
                            <div>
                                {val.label}
                            </div>
                        );
                    })}
            </div>
          
        </div>
    )
}

export default Search;

