import React, { useContext } from 'react';

import ThemeContext from '../../context/ThemeContext';
import './toolbar.css';
import DarkModeIcon from '@mui/icons-material/DarkMode'

const Toolbar = () => {

    const { theme, toggleTheme}= useContext(ThemeContext);

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