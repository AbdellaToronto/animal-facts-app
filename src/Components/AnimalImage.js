import React from 'react';

export const AnimalImage = (animalType) => {
    return ( 
        <div> 
            <img className="animal" alt={animalType.animalType} src ={require(`../images/${animalType.animalType}.jpg`)} />
        </div>
    );
};
