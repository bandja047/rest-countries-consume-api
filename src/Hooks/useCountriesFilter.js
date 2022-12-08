
import axios from 'axios'
import { useState } from 'react';


export function useCountriesFilter(){

    const [countries, setCountries] = useState([]);

    const [search, setSearch] = useState([])

    const countryByName = function getCountries(){
        axios.get("https://restcountries.com/v3.1/all").then((result) => {
            const data = result.data;
            const countries = [...data]
            
            console.log("render");
            setSearch(countries)
            setCountries(countries)
        }).catch(err => {
            console.log(err);
        })
    }

    const countryByRegion = function getCountriesByRegin(region){
        axios.get(`https://restcountries.com/v3.1/region/${region}`)
        .then((result) => {
            const data = result.data;
            const response = [...data]

            setSearch(response);

        })
        .catch(err => {
            console.log(err);
        })
    }

    const searched = function searchedData(countries){
        setSearch(countries)
    }
    return [countries,search,searched,countryByName,countryByRegion]
}