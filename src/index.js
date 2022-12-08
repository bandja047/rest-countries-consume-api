import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import Toolbar from './components/toolbar/Toolbar';
import { ThemeContextV2Provider } from './context/ThemeContextV2';
import Filter from './components/filter/Filter';


const root = ReactDOM.createRoot(document.getElementById('root'));
/* root.render(
  <React.StrictMode>
    <BrowserRouter>
    <ThemeContextV2Provider>
    <>
       <Toolbar/>
       <Filter/>
     </>
    </ThemeContextV2Provider>
    
    </BrowserRouter>
    
  </React.StrictMode>
); */


root.render(
  <React.StrictMode>
    <BrowserRouter>
     
        <App />
      

    </BrowserRouter>

  </React.StrictMode>
);


