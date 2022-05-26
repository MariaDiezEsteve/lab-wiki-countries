import './App.css';
import Navbar from "./components.jsx/Navbar"
import CountriesList from "./components.jsx/CountriesList"
import CountryDetails from "./components.jsx/CountryDetails"
import {Routes, Route} from "react-router-dom"
import {useState} from "react"
import countries from "./countries.json"

function App() {
 
 
  return (
    <div className="App">
       <Navbar />      
       <br />
       <CountriesList />
       <br />
       <Routes>
        {/* <Route path='/' element={<CountriesList />} /> */}
        <Route path='/:alpha3Code' element={<CountryDetails countries={countries}/>} />
      </Routes>

    </div>
  );
}

export default App;
