import React from "react";
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const navigate = useNavigate();

  const navigateToRobot = () => {
    navigate('/robots');
  };

  return (
    <div id="banner">

      <div id="demo" class="carousel slide" data-bs-ride="carousel">

        <div class="carousel-indicators">
          <button type="button" data-bs-target="#demo" data-bs-slide-to="0" class="active"></button>
          <button type="button" data-bs-target="#demo" data-bs-slide-to="1"></button>
          <button type="button" data-bs-target="#demo" data-bs-slide-to="2"></button>
        </div>

        <div class="carousel-inner">
          <div class="carousel-item active container">
            <img src="https://image.cnbcfm.com/api/v1/image/105786247-1552311939465gettyimages-920743046.jpeg?v=1562950112&w=630&h=354&ffmt=webp&vtcrop=y" alt="Los Angeles" class="d-block" style={{ width: "100%" }} />
            <div class="content">
              <div class="heading">
              Welcome to Robots Inc.
              </div>
              <div class="button-container">
              <button className="button" onClick={navigateToRobot}>Get Started</button>
              </div>
            </div>
          </div>

          <div class="carousel-item">
            <img src="https://imageio.forbes.com/specials-images/imageserve/61d66f8dbbb58ffd41f3d174/AI-and-robotics/960x0.jpg?format=jpg&width=960" alt="Chicago" class="d-block" style={{ width: "100%" }} />
          </div>
          <div class="carousel-item">
            <img src="https://www.computerworlduniversity.es/archivos/202009/adobestock-157225065.jpg" alt="New York" class="d-block" style={{ width: "100%" }} />
          </div>
        </div>

        <button class="carousel-control-prev" type="button" data-bs-target="#demo" data-bs-slide="prev">
          <span class="carousel-control-prev-icon"></span>
        </button>
        <button class="carousel-control-next" type="button" data-bs-target="#demo" data-bs-slide="next">
          <span class="carousel-control-next-icon"></span>
        </button>
      </div>
    </div>
  );
}

export default Home;