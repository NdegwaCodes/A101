import React, {useState, useEffect, useContext} from 'react';
//import icons
import {RiMapPineLine, RiArrowDownSLine, RiArrowUpSline } from 'react-icons/ri';
//import headless ui
import {Menu} from '@headlessui/react';
//import context
import {HouseContext} from '../context/HouseContext';

const CountyDropdown = () => {
  const { county, setCounty, counties} = useContext(HouseContext);
  const [isOpen, setIsOpen] = useState(false);
  return ( 
  <Menu as='div' className='dropdown relative' >
    <Menu.Button onClick={() => setIsOpen(!isOpen)} 
    className='dropdown-btn w-full text-left'>
      <RiMapPineLine className='dropdown-icon-primary' />
      <div>
      <div className='text-[15px] font-medium leading-tight'>{county}</div>
    <div className='text-[13px]'>CountyDropdown</div>
    {isOpen ? (
      <RiArrowUpSline className='dropdown-icon-secondaty' />
    ): (
      <RiArrowDownSLine className='dropdown-icon-secondary' />
    )}
    </div>
    </Menu.Button>
    <Menu.Items className='dropdown-menu'>
      {counties.map((county, index) => {
        return (
          <Menu.Item key={index}>
            {({active}) => (
              <Menu.Item onClick={() => setCounty(county)} 
              className='cursor-pointer hover:text-violet-700 transition' as='li' key={index}>
                {county}
              </Menu.Item>
            )};
          </Menu.Item>
        );
      })}
    </Menu.Items>
  </Menu>
  );
};

export default CountyDropdown;
