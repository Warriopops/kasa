import React from 'react';
import Logo from "/src/assets/image/logo.svg"
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <section className='navbar'>
      <Link to="/"><img src={Logo}></img></Link>
      <div className='about'>
      <Link to="/">Accueil</Link>
      <Link to="/about">A propos</Link>
      </div>
    </section>
  );
};

export default Header;