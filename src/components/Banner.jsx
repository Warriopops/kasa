import React from 'react';

const Banner = ({ title, backgroundImage}) => {
  return (
    <section className='banner' style={{ backgroundImage: `url('${backgroundImage}')` }}>
        <h1>{title}</h1>
    </section>
  );
};

export default Banner;