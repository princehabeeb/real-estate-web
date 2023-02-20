import React, { useState, useEffect, createContext } from 'react';
import {housesData} from '../data';

export const HouseContext = createContext();

const HouseContextProvider = ({ children }) => {
  const [houses, setHouses] = useState(housesData);
  const [country, setCountry] = useState('Location (any)');
  const [countries, setCountries] = useState([]);
  const [property, setProperty] = useState('property type (any)');
  const [properties, setProperties] = useState([]);
  const [price, setPrice] = useState('prince range (any)');
  const [loading, setLoading] = useState(false);


  return (
     <HouseContext.Provider value={{
      country,
      setCountries,
      countries,
      property,
      setProperty,
      properties,
      price,
      setPrice,
      houses,
      loading
     }} > 
     {children} 
     </HouseContext.Provider>
  );
};

export default HouseContextProvider;
