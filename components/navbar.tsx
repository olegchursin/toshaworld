import React from 'react';
import Logo from './logo';

const Navbar = () => {
  return (
    <nav className=" p-8 shadow-md">
      <div className="container flex items-center justify-center">
        <Logo />
      </div>
    </nav>
  );
};

export default Navbar;
