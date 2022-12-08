import React, { useRef } from 'react';
import './filter.css';
import SearchIcon from '@mui/icons-material/Search'
const Filter = (props) => {

    const {onHandleSubmit, onHandleInputChange,onHandleOptionChange} = props
    
    const inputSearch = useRef();

    function handleInputChange(e){
       

            onHandleInputChange(e.target.value)
          
        
    }

    function handleSubmit(e){

        e.preventDefault();

       

        console.log(inputSearch.current.value);

        

        onHandleSubmit(inputSearch.current.value);
      
    }

    function handleChange(e){
        onHandleOptionChange(e.target.value)
    }
    return (

        <div className='filter'>
            <form onSubmit={(e)=>handleSubmit(e)} >
                <SearchIcon className='iconSearch'/>
                <input className='inputSearch'  ref={inputSearch} type="text" placeholder='search for countries...' onChange={(e)=>handleInputChange(e)}/>

            </form>
            <select onChange={e=>handleChange(e)} >
                <option>All</option>
                <option>Africa</option>
                <option>America</option>
                <option>Asia</option>
                <option>Europe</option>
                <option>Oceania</option>
            </select>
        </div>
    );
}

export default Filter;