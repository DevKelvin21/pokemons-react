import React from 'react';
import './Card.css' 

const Card = ({src, alt, onClick}) => {
    const handleonClick = () =>{
        onClick(src)
    }

    return(

        <figure className="card" onClick={handleonClick}>
            <img src={src} alt={'img-'+alt} height="250"/>
        </figure>

    )

}

export default Card;