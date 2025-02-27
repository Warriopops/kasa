import React, { useState } from "react";

const Carrousel = ({ title, content, equipments }) => {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    setIsVisible(!isVisible);
  };

  return (
    <div className="category-container">
      <h2>
        {title}
        <i
          onClick={toggleVisibility}
          className={`fa-solid fa-chevron-down chevron ${isVisible ? "rotate" : ""}`}
        ></i>
      </h2>

      {equipments && equipments.length > 0 ? (
        <ul className={`content ${isVisible ? "show" : ""}`}>
          {equipments.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      ) : (
        <p className={`content ${isVisible ? "show" : ""}`}>{content}</p>
      )}
    </div>
  );
};

export default Carrousel;
