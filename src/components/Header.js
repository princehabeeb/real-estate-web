import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../assets/img/logo.svg';


const Header = () => {
  return (
  <header className='py-6 mb-12 border-b'>
    <div className='container mx-auto'>
      {/* Logo */}
      <Link to='/'>
         <img src={Logo} alt='' />
      </Link>
      <div>
        <Link to=''>Log in</Link>
        <Link to=''>Sign up</Link>
      </div>
    </div>
  </header>
  );
};

export default Header;
