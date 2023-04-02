import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub} from "@fortawesome/free-brands-svg-icons";

const CarouselPage = () => {
  return (
    <div className="Carousel">
      <Carousel>
        <div>
          <a
            href="https://nikesneakersite.netlify.app/"
            className="link-site"
            target="_blank"
            rel="noreferrer"
          >
            Nike Sneaker Site
          </a>
          <a href="https://github.com/MayleenZ/NikeShoeApp" target="_blank" rel="noreferrer" className="project-icons">
            <FontAwesomeIcon icon={faGithub} size="2x" />
            </a>
          <img
            src="https://i.postimg.cc/3xY5mFbb/Screen-Shot-2023-04-01-at-11-21-43-AM.png"
            alt="sneaker website"
          />
          <p className="legend">Nike Home Page</p>
        </div>
        <div>
          <img
            src="https://i.postimg.cc/FFB2CQCc/Screen-Shot-2023-04-01-at-11-22-25-AM.png"
            alt="homepage"
          />
          <p className="legend">Nike Shoes Page</p>
        </div>
        <div>
          <img
            src="https://i.postimg.cc/hP03WWpp/Screen-Shot-2023-04-01-at-11-22-06-AM.png"
            alt="homepage"
          />
          <p className="legend">Nike Checkout Page</p>
        </div>
        <div>
          <a
            href="https://starwarstarshipcards.netlify.app"
            className="link-site"
            target="_blank"
            rel="noreferrer"
          >
            Star War Spaceships
          </a>
          <a href="https://github.com/MayleenZ/StarWars-ReactAPI" target="_blank" rel="noreferrer" className="project-icons">
            <FontAwesomeIcon icon={faGithub} size="2x" />
            </a>
          <img
            src="https://i.postimg.cc/xjG8GcFq/Screen-Shot-2023-04-01-at-9-45-01-AM.png"
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
          <a href="https://github.com/MayleenZ/BuzzWord-Game" target="_blank" rel="noreferrer" className="project-icons">
            <FontAwesomeIcon icon={faGithub} size="2x" />
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
            rel="noreferrer"
          >
            Cat Facts & NYC Adoption
          </a>
          <a href="https://github.com/MayleenZ/Cat-Fact-App" target="_blank" rel="noreferrer" className="project-icons">
            <FontAwesomeIcon icon={faGithub} size="2x" />
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
