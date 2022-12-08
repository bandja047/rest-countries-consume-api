import React, { useContext } from 'react';

import ThemeContextV2 from '../../context/ThemeContextV2';
import './toolbar.css';
import DarkModeIcon from '@mui/icons-material/DarkMode'

const Toolbar = () => {

    const { theme, toggleTheme}= useContext(ThemeContextV2);

    function handleSwitchTheme(){
        
        toggleTheme(theme);
    }

    return (
        <div className='toolbar'>
                where in the world?
                <button className='theme'  onClick={handleSwitchTheme} >
                <DarkModeIcon className='iconTheme'/>
                    Dark Mode
                </button>
               
        </div>
    );
};

export default Toolbar;