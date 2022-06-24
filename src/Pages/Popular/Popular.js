import React, {useEffect, useState} from 'react';
import axios from "axios";
import {API_KEY} from "../../helpers/Apikey";
import './Popular.css'
//    https://api.themoviedb.org/3/movie/popular?api_key=ef82a28ec1ad83b010fd1021cbe28e5c
const Popular = () => {

    const [popular, setPopular] = useState([])

    useEffect(() => {
        axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&language=en-US&page=1`)
            .then(({data}) => {
                // console.log(data)
                setPopular(data.results)
            })
    }, [])
    // console.log(popular)
    return (
        <div className="container">
                <div className="row">
                    <div className="col-3">
                        {
                            popular.map(el => (
                                <div className="col-3">
                                    <div className="card p-4 m-2">
                                        <img src={`https://www.themoviedb.org/t/p/w220_and_h330_face/${el.poster_path}`}
                                             alt=""/>
                                        <p>{el.title} </p>
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                </div>
        </div>
    );
};

export default Popular;