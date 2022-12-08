import React, { createContext, useState } from 'react';

const themes = {
    light: {
        name: "light",
        background: "white",
        color: "black"
    },
    dark: {
        name:"dark",
        background: "black",
        color: "white"
    }
}
const ThemeContext = createContext({
    name: "light",
    mode: themes.light,
    updateTheme: () => { }
})

export const ThemeContextProvider = (props) => {
    const [theme, setTheme] = useState(themes.light)

   
      
      const   toggleTheme= (value) => {
          
            value === "light" ? setTheme(themes.dark) : setTheme(themes.light);
            console.log(value)
        }
    

    return (
        <ThemeContext.Provider value={{theme,toggleTheme}}>
            {props.children}
        </ThemeContext.Provider>
    );
};

export default ThemeContext; 