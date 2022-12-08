import { useState } from "react";

import axios from 'axios';

export function useAlpha() {

    const [alpha, setAlpha] = useState([])

    const countries = function getCountries(borders) {

        console.log(borders);
        let value = []

        if (borders === undefined);
        else
            for (let i = 0; i < borders.length; i++) {

                axios.get(`https://restcountries.com/v3.1/alpha/${borders[i]}`)
                    .then((result) => {

                        const data = result.data;
                        const response = [...data];



                        for (var key in response) {

                            value.push(response[key])
                        }

                        setAlpha([...value]);
                    })
                    .catch((err) => {
                        console.log(err);
                    })
            }


    }


    return [alpha, countries];
}