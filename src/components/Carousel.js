import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

const CarouselPage = () => {
  return (
    <div>
      <Carousel>
        <div>
            <h1>Nike Sneaker Site</h1>
          <a href="https://nikesneakersite.netlify.app/">Nike Sneaker Site</a>
          <img
            src="https://i.postimg.cc/PrQWdP6Z/Screen-Shot-2023-03-31-at-1-26-46-PM.png"
            width="200"
            height="auto"
          />
          <p className="legend">Home Page</p>
        </div>
        <div>
          <img src="https://i.postimg.cc/9QNqfTy4/Screen-Shot-2023-03-31-at-1-27-21-PM.png" />
          <p className="legend">Checkout Page</p>
        </div>
        <div>
          <h1>Star War Spaceships</h1>
          <a href="https://starwarstarshipcards.netlify.app">
            Star War Spaceships
          </a>
          <img src="https://i.postimg.cc/52vqDnh4/Screen-Shot-2023-03-31-at-1-43-43-PM.png" />
          <p className="legend">Legend 2</p>
        </div>
        <div>
            <h1>BuzzWord</h1>
          <a href="https://buzzwordgame.netlify.app">BuzzWord</a>
          <img src="https://i.postimg.cc/9QNqfTy4/Screen-Shot-2023-03-31-at-1-27-21-PM.png" />
          <p className="legend">Legend 2</p>
        </div>
        <div>
          <h1>Cat Facts & NYC Adoption </h1>
          <a href="https://catfactsadopt.netlify.app">
            Cat Facts & NYC Adoption
          </a>
          <img src="https://i.postimg.cc/9QNqfTy4/Screen-Shot-2023-03-31-at-1-27-21-PM.png" />
          <p className="legend">Legend 2</p>
        </div>
      </Carousel>
    </div>
  );
};

export default CarouselPage;
