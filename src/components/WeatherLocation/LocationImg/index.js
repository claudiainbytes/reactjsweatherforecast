import React from 'react';

const LocationImg = ({location}) => {
    const path = "images/";
    const imagePath = `${path}${location.image}`;

    return(
        <div className="overflou">
             <img className="card-img-top" src={imagePath} alt={location.city}></img>
        </div>
    );
}    

export default LocationImg;