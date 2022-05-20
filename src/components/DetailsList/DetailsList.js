import React from 'react';
import './DetailsList.css'

const DetailsList = (props) => {
    return(
        <div className="DetailsList">
            <img src={props.image} alt={props.name} height="250"/>
            <h1>Name: {props.name}</h1>
            <h1>Order: {props.order}</h1>
            <h1>Moves:</h1>
            <ul className="List">
                {props.children}
            </ul>
        </div>
    )
}

export default DetailsList;