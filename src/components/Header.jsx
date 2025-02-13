import React from 'react';

const Header = () => {
  return (
    <section className='navbar'>
      <a href="/"><img src='src/assets/image/logo.svg'></img></a>
      <div className='about'>
      <a href="/">Acceuil</a>
      <a href="/about">A Propos</a>
      </div>
    </section>
  );
};

export default Header;