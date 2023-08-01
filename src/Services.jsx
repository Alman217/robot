import React from "react";

const Services = () => {
  const services = [
    {
      id: 1,
      title: "Robot Maintenance",
      icon: "fas fa-tools",
      description:
        "We provide regular maintenance services to keep your robots in top condition",
    },
    {
      id: 2,
      title: "Robot Repairs",
      icon: "fas fa-wrench",
      description:
        "Our skilled technicians can repair any issues with your robots quickly and efficiently",
    },
    {
      id: 3,
      title: "Robot Upgrades",
      icon: "fas fa-rocket",
      description:
        "Upgrade your robots with the latest technology to improve their performance",
    },
  ];

  return (
    <div className="services">
      <h2>Our Services</h2>
      <div className="service-cards">
        {services.map((service) => (
          <div className="service-card" key={service.id}>
            <i className={service.icon}></i>
            <h3>{service.title}</h3>
            <p>{service.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Services;