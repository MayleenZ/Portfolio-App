import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

const CarouselPage = () => {
  return (
    <div className="Carousel">
      <Carousel>
        <div>
          <a href="https://nikesneakersite.netlify.app/" className="link-site"             target="_blank"
            rel="noopener">
            Nike Sneaker Site
          </a>
          <img
            src="https://i.postimg.cc/PrQWdP6Z/Screen-Shot-2023-03-31-at-1-26-46-PM.png"
            alt="sneaker website"
          />
          <p className="legend">Nike Home Page</p>
        </div>
        <div>
          <img
            src="https://i.postimg.cc/9QNqfTy4/Screen-Shot-2023-03-31-at-1-27-21-PM.png"
            target="_blank"
            rel="noopener"
            alt="homepage"
          />
          <p className="legend">Nike Checkout Page</p>
        </div>
        <div>
          <a
            href="https://starwarstarshipcards.netlify.app"
            className="link-site"
            target="_blank"
            rel="noopener"
          >
            Star War Spaceships
          </a>
          <img
            src="https://i.postimg.cc/52vqDnh4/Screen-Shot-2023-03-31-at-1-43-43-PM.png"
            alt="spaceship website"
          />
          <p className="legend">Space Ship Cards</p>
        </div>
        <div>
          <a
            href="https://buzzwordgame.netlify.app"
            target="_blank"
            rel="noreferrer"
            alt="word-game"
            className="link-site"
          >
            BuzzWord
          </a>
          <img
            src="https://i.postimg.cc/QCLrJcyn/Screen-Shot-2023-03-31-at-2-04-12-PM.png"
            alt="word-game website"
          />
          <p className="legend">BuzzWord Home Page</p>
        </div>
        <div>
          <img
            src="https://i.postimg.cc/qM0PBBVn/Screen-Shot-2023-03-31-at-2-08-01-PM.png"
            alt="word-game website"
          />
          <p className="legend">Winner Outcome</p>
        </div>
        <div>
          <a
            href="https://catfactsadopt.netlify.app"
            className="link-site"
            target="_blank"
            rel="noopener"
          >
            Cat Facts & NYC Adoption
          </a>
          <img
            src="https://i.postimg.cc/zGY1gwgL/Screen-Shot-2023-03-31-at-3-14-46-PM.png"
            alt="cat facts website"
          />
          <p className="legend">Cat Fact Page</p>
        </div>
      </Carousel>
    </div>
  );
};

export default CarouselPage;
