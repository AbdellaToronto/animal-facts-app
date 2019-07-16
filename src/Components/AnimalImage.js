import React from 'react';
import dog from '../images/dog.jpg';
import cat from '../images/cat.jpg';

export const AnimalImage = (animalType) => {
    return ( 
        <div> 
            {animalType.animalType === 'dog' ? <img className="animal" alt={animalType.animalType} src ={cat} /> : <img className="animal" alt={animalType.animalType} src={dog} /> }
        </div>
    );
};
