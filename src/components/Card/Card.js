import React from 'react';

const Card = ({el}) => {
    return (
        <div className="col-3">
            <div className="card p-4 m-2">
                <img src={`https://www.themoviedb.org/t/p/w220_and_h330_face/${el.poster_path}`} alt=""/>
                <p className="m-2">{el.title}</p>
            </div>
        </div>
    );
};

export default Card;