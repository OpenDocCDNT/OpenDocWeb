import React from "react";
import './filter.css';
import { useState, useEffect } from "react";
import Filter from '../../../../src/shared/img/svg/filter.svg';
import { fetchCreatorPost } from "../fetchCreator";

function Search() {

    const [datas] = useState([]);
    const [searchTerm, setSearchterm] = useState("");

    useEffect(() => {
        fetchCreatorPost('http://127.0.0.1:8080/api/lesson/getAll')
            .then(response => {
                if(response === undefined) {
                    return console.log('Erreur undefined');
                }
                if(response.statusCode === !200 && response.statusCode !== 418) {
                    return console.log('Erreur 418 ou !200');
                }
                if(response.statusCode === 418) {
                    return console.log('ok');
                }
                const datas = response.responseBody.lessons;
                return datas;        
            })
            .catch(() => {
                return console.log('Erreur final');
            })
    }, []);
   
    const handleSearchTerm = (e) => {
        let value = e.target.value;
        value.length > 2 && setSearchterm(value);
    };

    console.log(searchTerm);

    return (
        <>
        <div className="dasboardExplore-filter">
            <input id="searchBar" name="searchBar" type="text" placeholder="Entrez un mot clé, cours, thèmes" onChange={handleSearchTerm}/>
            <img className="dasboardExplore-titleLogo-filter" src={Filter} alt="add" />
        </div>

        <div className="search_results">
            <div className="search_result"> 
           { console.log(datas)}
            {datas
                .filter((val) => {
                     return val.label.toLowerCase().includes(searchTerm.toLocaleLowerCase());
                 })
                .map((val) => {
                     return (
                         <div key={val.id}> 
                             {val.label}
                        </div>
                     );   
            })}
            </div>
        </div>
        </>
    );
}


export default Search;

