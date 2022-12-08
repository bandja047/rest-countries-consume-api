import React, { createContext, useState } from 'react';




const ThemeContextV2 = createContext({
    theme:'dark'
})

export const ThemeContextV2Provider = (props) => {

    const [theme, setTheme] = useState('dark')

    const toggleTheme = (mode) => {

        console.log('mode: ' + mode)
        const body = document.body;
        if (mode === 'light') {
            setTheme('dark');
           
            body.classList.add('dark');
        }
        else { 
            setTheme('light');  
           
            body.classList.remove('dark')}
      
    }

    return (
        <ThemeContextV2.Provider value={{theme,toggleTheme}}>
            {props.children}
        </ThemeContextV2.Provider>
    );
};

export default ThemeContextV2;