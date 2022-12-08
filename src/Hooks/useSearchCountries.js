
import axios from 'axios'
import { useState } from 'react';


export function useSearchCountries(){

    const [countries, setCountries] = useState([]);

    const [search, setSearch] = useState([])

    const toSearch = function getCountries(){
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

    return [countries,search,toSearch]
}