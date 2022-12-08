import React, { useEffect} from 'react';



import Toolbar from '../components/toolbar/Toolbar';
import Filter from '../components/filter/Filter';

import CountriesAll from '../components/Countries/CountriesAll/CountriesAll';
import { useCountriesFilter } from '../Hooks/useCountriesFilter';

const Countries = () => {


    const [countries, search, setSearch, setCountries, setCountriesByRegion] = useCountriesFilter([])

    useEffect(() => {
        setCountries();
    },[])


    function handleOptionChange(e) {


        console.log(e);
        setCountriesByRegion(e);


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