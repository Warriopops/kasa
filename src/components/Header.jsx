import React from 'react';

const Header = () => {
  return (
    <section className='navbar'>
      <img src='src/assets/image/logo.svg'></img>
      <div className='about'>
      <a href="/">Acceuil</a>
      <a href="/">A Propos</a>
      </div>
    </section>
  );
};

export default Header;