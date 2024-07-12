import React from "react";
import "./Card.css"; // Import your CSS file for additional styles

const Card = ({ color, image, title, description, button }) => {
  return (
    <div className="card" style={{ backgroundColor: color }}>
      <div className="card-content">
        <img src={image} alt={title} className="card-image" />
        <h2>{title}</h2>
        <p>{description}</p>
        <> {button} </>  
</div>
    </div>
  );
};

export default Card;
