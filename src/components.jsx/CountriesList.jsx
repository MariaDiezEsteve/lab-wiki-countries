import React, { useEffect }  from 'react'
import {Link} from "react-router-dom"
import countries from "../countries.json"
import {useState} from "react"



 function CountriesList(props) {

   const [countryList, setCountryList] = useState(countries)

    useEffect(()=> {
    setCountryList(countries)
     }, [])

   return (
     <div> 
       <p>Country List</p>
             {countryList.map((eachCountry, index) => {
               return(
                     <div key={eachCountry.name.common + index}>
                     <Link to={`/country/${eachCountry.alpha3Code}`} > {eachCountry.name.common} </Link>
                     </div>
                     )
                 })             
                }
     </div>
   )
}

export default CountriesList

