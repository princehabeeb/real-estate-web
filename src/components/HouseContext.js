import React, { useState, useEffect, createContext } from 'react';
import {housesData} from '../data';

export const HouseContext = createContext();

const HouseContextProvider = ({ children }) => {
  return  <HouseContext.Provider value={console.log('this is the console')} > {children} </HouseContext.Provider>
;
};

export default HouseContextProvider;
