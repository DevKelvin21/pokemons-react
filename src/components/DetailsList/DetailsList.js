import React from 'react';
import './DetailsList.css'

const DetailsList = ({image, name, order, children}) => {
    return(
        <div className="DetailsList">
            <img src={image} alt={name} height="250"/>
            <h1>Name: {name}</h1>
            <h1>Order: {order}</h1>
            <h1>Moves:</h1>
            <ul className="List">
                {children}
            </ul>
        </div>
    )
}

export default DetailsList;