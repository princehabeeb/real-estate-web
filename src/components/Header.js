import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../assets/img/logo.svg';


const Header = () => {
  return (
  <header>
    <div className='container mx-auto'>
      {/* Logo */}
      <Link to='/'>
         <img src={Logo} alt='' />
      </Link>
    </div>
  </header>
  );
};

export default Header;
