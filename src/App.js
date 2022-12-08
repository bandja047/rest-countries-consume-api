
import './App.css';
import { Route, Routes } from 'react-router-dom';
import CountriesDetails from './pages/CountriesDetails';

import { ThemeContextProvider } from './context/ThemeContext';
import Countries from './pages/Countries';

function App() {
  return (

    <ThemeContextProvider>
       <Routes>
      <Route path="/rest-countries-consume-api" element={<Countries/>} />
      <Route path="rest-countries-consume-api/countries/details/:name" element={<CountriesDetails/>} />
      
    </Routes>
    </ThemeContextProvider>
   
  );
}

export default App;
