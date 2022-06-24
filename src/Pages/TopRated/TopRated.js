import React, {useEffect, useState} from 'react';
import axios from "axios";
import {API_KEY} from "../../helpers/Apikey";
import Card from "../../components/Card/Card";

const TopRated = () => {

    const [topRated, setTopRated] = useState()

    useEffect(() => {
        axios(`https://api.themoviedb.org/3/movie/top_reted?api_key=${API_KEY}&language=en-US&page=1`)
            .then(({data}) => {
                setTopRated(topRated)
            })
    }, [])

    return (
        <div className="container">
            <div className="content_movie col-3">
                <h1> Top Rated Movies</h1>
                <div className="row">
                    <Card el={topRated}/>
                </div>
            </div>
        </div>
    );
};

export default TopRated;