
import './App.css';
import { Route, Routes } from 'react-router-dom';
import CountriesDetails from './pages/CountriesDetails';

import { ThemeContextV2Provider } from './context/ThemeContextV2';
import Countries from './pages/Countries';

function App() {
  return (

    <ThemeContextV2Provider>
       <Routes>
      <Route path="/" element={<Countries/>} />
      <Route path="/countries/details/:name" element={<CountriesDetails/>} />
      
    </Routes>
    </ThemeContextV2Provider>
   
  );
}

export default App;
