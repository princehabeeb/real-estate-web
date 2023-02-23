import React, { useState, useEffect, useContext } from 'react';
import { RiMapPinLine, RiArrowDownSLine, RiArrowUpSLine} from 'react-icons/ri';
import { Menu } from '@headlessui/react';
import { HouseContext } from './HouseContext';



const CountryDropdown = () => {
  const {country, setCountry, countries } =
   useContext(HouseContext);
   
   const [isOpen, setIsOpen] = useState(false);

  return <div>CountryDropdown</div>;
};

export default CountryDropdown;
