import React from "react";

function TestimonialCard(props) {
  const { name, image, content } = props.testimonial;

  return (
    <div className="testimonial-card">
      <img src={image} alt={name} />
      <p>{content}</p>
      <h4>{name}</h4>
    </div>
  );
}

export default TestimonialCard;