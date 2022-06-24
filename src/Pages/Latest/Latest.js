import React, {useEffect, useState} from 'react';
import axios from "axios";
import {API_KEY} from "../../helpers/Apikey";
import Card from "../../components/Card/Card";
import {} from "react-router-dom";


const Latest = () => {

    const [latest, setLatest] = useState({})

    useEffect(() => {
        axios(`https://api.themoviedb.org/3/movie/latest?api_key=${API_KEY}&language=en-US`)
            .then((result) => {
                setLatest(latest)
            })
    }, [])


    return (
        <div className="container">
            <div className="movie_content">
                <h1>Top Rated Movies</h1>

                <div className="row">
                    <Card el={latest}/>
                </div>
            </div>
        </div>
    );
};

 export default Latest;