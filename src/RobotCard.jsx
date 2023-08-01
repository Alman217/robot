import React from "react";

function RobotCard(props) {
  const showAlert = () => {
    window.alert("Robot added to cart");
  };
  const { name, image, price, description } = props.robot;

  return (
    <div className="robot-card">
      <h3>{name}</h3>
      <br></br>
      <img src={image} alt={name} id="robots"/>
      <br></br>
      <p>{description}</p>
      <button onClick={showAlert}>Add to Cart</button>
    </div>
  );
}

export default RobotCard;