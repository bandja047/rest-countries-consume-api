import axios from 'axios';
import { useState } from 'react';
import { useAlpha } from './useAlpha';


export function useCountryName(){

    const [country, setCountry] = useState([]);

    const [alpha, setAlpha] = useAlpha([]);

    const countries = function getCountriesByName (name){

        axios.get(`https://restcountries.com/v3.1/name/${name}`)
            .then((result) => {
                const data = result.data;
                const response = [...data];

                console.log(response);
                response.map((item) => {

                    console.log("object");
                    setAlpha(item.borders)
                });

                setCountry(response);

            }).catch((err) => {
                console.log(err);
            })
    }

    return [country,alpha,countries]
}