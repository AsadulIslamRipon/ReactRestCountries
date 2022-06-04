import React from 'react';
import './Country.css'

const Country = (props) => {
    const {name, region, population, flags} = props.country;
    return (
        <div className='country'>
            <h1>{name.common}</h1>
            <p><small>{region}</small></p>
            <img src={flags.png} alt="" />
            <p><small>{population}</small></p>
        </div>
    );
};

export default Country;