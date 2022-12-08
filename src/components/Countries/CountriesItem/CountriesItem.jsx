import React from 'react';
import'./countriesItem.css'
import Card from '../../card/Card';

const CountriesItem = (props) => {

    const {common, png,population,region,capital} = props

    return (
        <Card>
           
                        <img src={png} alt='' width="240" height="100" />
                        <h1 >{common}</h1>
                        <p className='not-margin-top'>population:{String(population).replace(/(.)(?=(\d{3})+$)/g,'$1,')}</p>
                        <p>Region:{region}</p>
                        <p>Capital:{capital}</p>

                    
        </Card>
    );
};

export default CountriesItem;