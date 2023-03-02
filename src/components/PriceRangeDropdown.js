import React, { useState, useEffect, useContext } from 'react';
import { RiHome5Line, RiArrowDownSLine, RiArrowUpSLine} from 'react-icons/ri';
import { Menu } from '@headlessui/react';
import { HouseContext } from './HouseContext';



const PropertyDropdown = () => {
  const { property, setProperty, properties } =
   useContext(HouseContext);

   
   const [isOpen, setIsOpen] = useState(false);

  return <Menu as='div' onClick={() => setIsOpen(!isOpen)} className='dropdown relative' >
    <Menu.Button className='dropdown-btn w-full text-left'>
      <RiHome5Line className='dropdown-icon-primary' />
      <div>
        <div className='text-[15px] font-medium leading-tight'>
          {property}
          </div>
        <div className='text-[13px]'>Select your place</div>
      </div>
      {
          isOpen ? (
            <RiArrowDownSLine className='dropdown-icon-secondary' />
          ): ( 
            <RiArrowUpSLine className='dropdown-icon-secondary' />
          )
        }
    </Menu.Button>
    <Menu.Items className='dropdown-menu'>
      {properties.map((property, index) => {
        return (
          <Menu.Item 
          onClick={() => setProperty(property)}
          className='coursor-pointer hover:text-violet-700 transition'
           as='li' key={index}>
              {property}
          </Menu.Item>
        );
      })}
    </Menu.Items>
  </Menu>;
};

export default PropertyDropdown;
