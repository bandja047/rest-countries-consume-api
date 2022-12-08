import React, { useContext, useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';


import Toolbar from '../components/toolbar/Toolbar';
import Filter from '../components/filter/Filter';
import Card from '../components/card/Card';
import CountriesItem from '../components/Countries/CountriesItem/CountriesItem';
import CountriesAll from '../components/Countries/CountriesAll/CountriesAll';

const Countries = () => {




    const [countries, setCountries] = useState([]);

    const [search, setSearch] = useState([])





    useEffect(() => {
        axios.get("https://restcountries.com/v3.1/all").then((result) => {
            const data = result.data;
            const countries = [...data]
            // console.log(countries);
            // console.log(object);
            console.log("render");
            setSearch(countries)
            setCountries(countries)
        }).catch(err => {
            console.log(err);
        })
    }, [])


    function handleOptionChange(e) {

        alert(e)
        console.log(e);

        axios.get(`https://restcountries.com/v3.1/region/${e}`)
            .then((result) => {
                const data = result.data;
                const response = [...data]

                setSearch(response);

            })
            .catch(err => {
                console.log(err);
            })
    }

    function handleSubmit(e) {

        const searchCountries = countries.filter((item) =>
            item.name.common.toUpperCase() === e.toUpperCase()
        );

        console.log(searchCountries);
        setSearch(searchCountries);
    }

    function handleInputChange(e) {

        if (e === "" || e === undefined || e === null) {

            setSearch(countries);
        }
    }


    return (
        <>
            <Toolbar />
            <div>
                <Filter
                    onHandleSubmit={(e) => handleSubmit(e)}
                    onHandleInputChange={(e) => handleInputChange(e)}
                    onHandleOptionChange={e => handleOptionChange(e)} />


                <CountriesAll list={search} />




            </div>
        </>
    );
};

export default Countries;