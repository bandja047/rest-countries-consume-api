import React, { useEffect, useState } from 'react';
import './countriesDetails.css'
import { Link, useLocation, useNavigate, useParams } from 'react-router-dom';

import axios from 'axios';
import Toolbar from '../components/toolbar/Toolbar';
import ButtonBack from '../components/button/ButtonBack';
import { useAlpha } from '../Hooks/useAlpha';
import { useCountryName } from '../Hooks/useCountryName';

const CountriesDetails = () => {

    let { name } = useParams();

    const navigate = useNavigate();

    const [country,alpha,setCountries] = useCountryName([])

    function redirect(param) {

        navigate(`/rest-countries-consume-api/countries/details/${param}`);

       setCountries(param)

    }

    useEffect(() => {

        setCountries(name)
        
    }, [])

    console.log(name);

    return (
        <>
            <Toolbar />
            <div>
                <ButtonBack />


                {country.map(item => (
                    <div className="countriesDetails">
                        <div className='flag-datails'> <img src={item.flags.png} width="240p" height="100" /></div>

                        <div className='detailsLeft'>
                            <h1>{item.name.common}</h1>
                            <p><span>Native Name:</span> {getNativeNames(item.name.nativeName)} </p>
                            <p><span>Population: </span>{item.population}</p>
                            <p><span>Region:</span> {item.region}</p>
                            <p><span>Sub Region:</span> {item.subregion}</p>
                            <p><span>Capital:</span> {item.capital}</p>




                            <p><span>Border Countries:</span>

                                {alpha.map((itemAlpha) => (
                                    <button className="btn-border" onClick={() => redirect(`${itemAlpha.name.common}`)}>{itemAlpha.name.common}</button>
                                ))}




                            </p>
                        </div>

                        <div>
                            <p>Top Level Domain: {item.tld}</p>
                            <p>Currencies: {getCurrencies(item.currencies)}</p>
                            <p>Languages: {getlanguages(item.languages)} </p>

                        </div>
                    </div>
                ))}





            </div>
        </>
    );
};

function getCurrencies(value) {

    for (var key in value) {


        return value[key].symbol
    }

    return "";
}

function getlanguages(value) {

    for (var key in value) {


        return value[key]
    }

    return "";
}

function getNativeNames(value) {

    for (var key in value) {


        return value[key].official;
    }

    return "";
}

export default CountriesDetails;