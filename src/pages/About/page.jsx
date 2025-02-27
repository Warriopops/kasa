import React from 'react';
import Banner from '../../components/Banner';
import Carrousel from '../../components/Carrousel';

const About = () => {
  return (
    <div className='about-page'>
      <Banner backgroundImage={"src/assets/image/banner-about.png"}/>
      <Carrousel title="Fiabilité" content="Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifies par nos équipes."/>
      <Carrousel title="Respect" content="La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entrainera une exclusion de notre plateforme"/>
      <Carrousel title="Service" content="La qualité du service est au coeur de notre engagement chez Kasa. Nous veillons à ce que chaque interaction, que ce soit avec nos hotes ou nos locataires, soit empreinte de respect et de bienveillance."/>
      <Carrousel title="Sécurité" content="La sécurité est la priorité de Kasa. Aussi bien pour nos hotes que pour les voyageurs, chaque logement correspond aux criteres de sécuité établis par nos services. En laissant une note aussi bien à l'hote qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hotes."/>
    </div>
  );
};

export default About;