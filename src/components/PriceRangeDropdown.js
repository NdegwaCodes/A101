import React, {useState, useEffect, useContext} from 'react';
//import icons
import {RiWallet3Line, RiArrowDownSLine, RiArrowUpSline } from 'react-icons/ri';
//import headless ui
import {Menu} from '@headlessui/react';
//import context
import {HouseContext} from '../context/HouseContext';

const PriceRangeDropdown = () => {
  const { price, priceRange, setPrice} = useContext(HouseContext);
  const [isOpen, setIsOpen] = useState(false);

  const prices = [
    { value: 'Price Range (any)',},
    { value: 'Under KSH 50,000',},
    { value: 'KSH 50,000 - 100,000',},
    { value: 'KSH 100,000 - $200,000',},
    { value: 'KSH 200,000 - $300,000',},
    { value: 'KSH 300,000 - $400,000',},
    { value: 'KSH 400,000 - $500,000',},
    { value: 'KSH 500,000 - $600,000',},
  ];

  return ( 
  <Menu as='div' className='dropdown relative' >
    <Menu.Button onClick={() => setIsOpen(!isOpen)} 
    className='dropdown-btn w-full text-left'>
      <RiWallet3Line className='dropdown-icon-primary' />
      <div>
      <div className='text-[15px] font-medium leading-tight'>{prices}</div>
    <div className='text-[13px]'>Choose Price Range</div>
    {isOpen ? (
      <RiArrowUpSline className='dropdown-icon-secondaty' />
    ): (
      <RiArrowDownSLine className='dropdown-icon-secondary' />
    )}
    </div>
    </Menu.Button>
    <Menu.Items className='dropdown-menu'>
      {priceRange.map((priceRange, index) => {
        return (
          <Menu.Item key={index}>
            {({active}) => (
              <Menu.Item onClick={() => setPrice(price.value)} 
              className='cursor-pointer hover:text-violet-700 transition' as='li' key={index}>
                {price.value}
              </Menu.Item>
            )};
          </Menu.Item>
        );
      })}
    </Menu.Items>
  </Menu>
  );
};

export default PriceRangeDropdown;
