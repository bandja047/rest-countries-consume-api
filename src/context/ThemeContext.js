import React, { createContext, useState } from 'react';




const ThemeContext = createContext({
    theme:'dark'
})

export const ThemeContextProvider = (props) => {

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
        <ThemeContext.Provider value={{theme,toggleTheme}}>
            {props.children}
        </ThemeContext.Provider>
    );
};

export default ThemeContext;