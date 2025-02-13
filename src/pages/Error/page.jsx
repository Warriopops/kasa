import React from 'react';

const Error = () => {
  return (
    <section className='error-container'>
      <h1>404</h1>
      <h2>Oups! La page que vous demandez n'existe pas.</h2>
      <a href="/">Retourner sur la page d’accueil</a>
    </section>
  );
};

export default Error;