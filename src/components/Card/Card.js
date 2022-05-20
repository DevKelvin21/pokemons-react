import React from 'react';
import './Card.css' 

const Card = (props) => {
    const handleonClick = () =>{
        props.onClick(props.src)
    }

    return(

        <figure className="card" onClick={handleonClick}>
            <img src={props.src} alt={'img-'+props.alt} height="250"/>
        </figure>

    )

}

export default Card;