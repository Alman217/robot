import React from "react";
import RobotCard from "./RobotCard";

const FeaturedRobots = () => {
  const robots = [
    {
      id: 1,
      name: "Atlas",
      image: "https://upload.wikimedia.org/wikipedia/commons/4/40/Honda_prototype_robots_Honda_Collection_Hall.jpg",
      description: "Atlas is a humanoid robot designed to operate on rough terrain",
    },
    {
      id: 2,
      name: "Spot",
      image: "https://techcrunch.com/wp-content/uploads/2020/12/anybotics-anymal.jpg?w=730&crop=1",
      description: "Spot is a four-legged robot designed for indoor and outdoor operation",
    },
    {
      id: 3,
      name: "Roomba",
      image: "https://i.pcmag.com/imagery/reviews/01hmxcWyN13h1LfMglNxHGC-1..v1589573902.jpg",
      description: "Roomba is a robot vacuum cleaner designed for home use",
    },
  ];

  return (
    <div className="featured-robots">
      <h2>Featured Robots</h2>
      <div className="robot-cards">
        {robots.map((robot) => (
          <RobotCard key={robot.id} robot={robot} />
        ))}
      </div>
    </div>
  );
}

export default FeaturedRobots;