import React, {useState, useEffect, useContext} from 'react';
//import icons
import {RiHome5Line, RiArrowDownSLine, RiArrowUpSline } from 'react-icons/ri';
//import headless ui
import {Menu} from '@headlessui/react';
//import context
import {HouseContext} from '../context/HouseContext';

const PropertyDropdown = () => {
  const { property, setProperty, properties} = useContext(HouseContext);
  const [isOpen, setIsOpen] = useState(false);
  return ( 
  <Menu as='div' className='dropdown relative' >
    <Menu.Button onClick={() => setIsOpen(!isOpen)} 
    className='dropdown-btn w-full text-left'>
      <RiHome5Line className='dropdown-icon-primary' />
      <div>
      <div className='text-[15px] font-medium leading-tight'>{property}</div>
    <div className='text-[13px]'>PropertyDropdown</div>
    {isOpen ? (
      <RiArrowUpSline className='dropdown-icon-secondaty' />
    ): (
      <RiArrowDownSLine className='dropdown-icon-secondary' />
    )}
    </div>
    </Menu.Button>
    <Menu.Items className='dropdown-menu'>
      {properties.map((property, index) => {
        return (
          <Menu.Item key={index}>
            {({active}) => (
              <Menu.Item onClick={() => setProperty(property)} 
              className='cursor-pointer hover:text-violet-700 transition' as='li' key={index}>
                {property}
              </Menu.Item>
            )};
          </Menu.Item>
        );
      })}
    </Menu.Items>
  </Menu>
  );
};

export default PropertyDropdown;
