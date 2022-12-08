import React from 'react';
import { Link } from 'react-router-dom';
import CountriesItem from '../CountriesItem/CountriesItem';
import './countriesAll.css';

const CountriesAll = (props) => {
    return (
        <div className='list'>
            {props.list.map((item) => (


                <Link className='link' to={`countries/details/${item.name.common}`}>
                    <CountriesItem
                        common={item.name.common}
                        png={item.flags.png}
                        population={item.population}
                        region={item.region}
                        capital={item.capital}
                    />
                </Link>
            ))}
        </div>
    );
};

export default CountriesAll;