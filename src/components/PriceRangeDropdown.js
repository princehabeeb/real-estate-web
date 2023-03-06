import React, { useState, useEffect, useContext } from 'react';
import { RiWallet3Line, RiArrowDownSLine, RiArrowUpSLine} from 'react-icons/ri';
import { Menu } from '@headlessui/react';
import { HouseContext } from './HouseContext';


const prices = [
  {
    value: 'Price range (any)',
  },
  {
    value: '100000 - 130000',
  },
  {
    value: '130000 - 160000',
  },
  {
    value: '160000 - 190000',
  },
  {
    value: '190000 - 220000',
  },
  {
    value: '100000 - 300000',
  },
  {
    value: '300000 - 400000',
  },
]

const PriceRangeDropdown = () => {
  const { price, setPrice } =
   useContext(HouseContext);

   
   const [isOpen, setIsOpen] = useState(false);

  return <Menu as='div' onClick={() => setIsOpen(!isOpen)} className='dropdown relative' >
    <Menu.Button className='dropdown-btn w-full text-left'>
      <RiWallet3Line className='dropdown-icon-primary' />
      <div>
        <div className='text-[15px] font-medium leading-tight'>
          {price}
          </div>
        <div className='text-[13px]'>Choose price range</div>
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
      {prices.map((price, index) => {
        return (
          <Menu.Item 
          onClick={() => setPrice(price.value)}
          className='coursor-pointer hover:text-violet-700 transition'
           as='li' key={index}>
              {price.value}
          </Menu.Item>
        );
      })}
    </Menu.Items>
  </Menu>;
};

export default PriceRangeDropdown;
