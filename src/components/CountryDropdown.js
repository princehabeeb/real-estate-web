import React, { useState, useEffect, useContext } from 'react';
import { RiMapPinLine, RiArrowDownSLine, RiArrowUpSLine} from 'react-icons/ri';
import { Menu } from '@headlessui/react';
import { HouseContext } from './HouseContext';



const CountryDropdown = () => {
  const {country, setCountry, countries } =
   useContext(HouseContext);
   
   const [isOpen, setIsOpen] = useState(false);

  return <Menu as='div' onClick={() => setIsOpen(!isOpen)} className='dropdown relative' >
    <Menu.Button className='dropdown-btn w-full text-left'>
      <RiMapPinLine className='dropdown-icon-primary' />
      <div>
        <div>{country}</div>
        <div>Select your place</div>
        {
          isOpen ? (
            <RiArrowUpSLine className='dropdown-icon-primary' />
          ): (
            <RiArrowDownSLine className='dropdown-icon-primary' />
          )
        }
      </div>
    </Menu.Button>
  </Menu>;
};

export default CountryDropdown;
