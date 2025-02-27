import React from 'react';
import Logo from "/src/assets/image/logo-footer.svg"

const Footer = () => {
  return (
    <section className='footer'>
      <img src={Logo}></img>
      <p>© 2020 Kasa. All rights reserved</p>
    </section>
  );
};

export default Footer;