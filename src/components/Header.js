import React from 'react';
//import link
import { Link } from 'react-router-dom';
//import logo
import logo from '../assets/logo.svg';

const Header = () => {
  return (<Header className='py-6 mb-12 border-b'>
    <div className='container mx-auto flex justify-between items-center '>
      {/*Logo */}
      <Link to='/'>
         <img src={logo} alt='' />
      </Link>
      {/*buttons*/}
      <div>
        /<Link to='/about'>About Us</Link>
        <Link to='/properties'>Properties</Link>
        <Link className='hover: text-violet-900 transition' to='/login'>Log In</Link>
        <Link className='bg-violet-700 hover:bg-violet-800 text-white px-4 py-3 rounded-lg transition' to='/signup'>Sign Up</Link>
      </div>
    </div>
  </Header>
  );
};


export default Header;
