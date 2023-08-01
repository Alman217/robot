import React from "react";
import TestimonialCard from "./TestimonialCard";

const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      name: "John Smith",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTuHQM-ji-ne3x60sYbmIbTMEsrDUl5bjIbKg&usqp=CAU",
      content:
        "I had a great experience working with Robotics Inc. Their robots are top-notch and their customer service is excellent.",
    },
    {
      id: 2,
      name: "Jane Doe",
      image: "https://img.huffingtonpost.com/asset/63fff1d02500003c0040b71b.png?ops=scalefit_720_noupscale",
      content:
        "I was impressed by the professionalism and expertise of the Robotics Inc. team. They helped me find the perfect robot for my business needs.",
    },
    {
      id: 3,
      name: "Bob Johnson",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSxJYjM-T42fuGlUfiWcUGpMb2t4L2kFkd-Ig&usqp=CAU",
      content:
        "The robot I purchased from Robotics Inc. has exceeded my expectations. It is efficient, reliable, and has helped me streamline my operations.",
    },
  ];

  return (
    <div className="testimonials">
      <h2>Testimonials</h2>
      <div className="testimonial-cards">
        {testimonials.map((testimonial) => (
          <TestimonialCard key={testimonial.id} testimonial={testimonial} />
        ))}
      </div>
    </div>
  );
}

export default Testimonials;