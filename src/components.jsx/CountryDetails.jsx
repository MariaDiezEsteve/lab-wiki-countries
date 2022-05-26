import React from 'react'
import { useState, useEffect } from 'react'
import countries from "../countries.json"
import { useParams } from "react-router-dom"




function CountryDetails(props) {

  const  {countries}  = props

  const { alpha3Code } = useParams() 

   const countriesDetails = countries.find(eachDetail => {
     if (eachDetail.alpha3Code === alpha3Code){
       return eachDetail
     }
   })


  return (
    <div>
      <p>{countriesDetails.name.common}</p> 
    </div>
  )
}

export default CountryDetails