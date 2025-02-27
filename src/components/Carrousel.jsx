import React, { useState } from 'react';

const Carrousel = ({ title, content }) => {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    setIsVisible(!isVisible);
  };

  return (
    <div className="carrousel-container">
      <h2>
        {title}
        <i onClick={toggleVisibility} className={`fa-solid fa-chevron-down chevron ${isVisible ? 'rotate' : ''}`}></i>
      </h2>
      <p className={`content ${isVisible ? 'show' : ''}`}>{content}</p>
    </div>
  );
};

export default Carrousel;
