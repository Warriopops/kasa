import React from 'react';
import { Link } from "react-router-dom";

const Card = ({ title, backgroundImage, id }) => {
  return (
    <Link to={`/fiche/${id}`} className='card-container' style={{ backgroundImage: `url('${backgroundImage}')` }}>
        <h1>{title}</h1>
    </Link>
  );
};

export default Card;