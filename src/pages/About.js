import Background from "../components/Background";
import ResumeButton from "../components/Button";
import Skills from "../components/Skills";
import Programmer from "../components/Programmer";
function About() {
  return (
    <div>
      <Skills/>
      <ResumeButton />
      <div className = "side-story">
      <Background />
      <img src="https://i.postimg.cc/0NHN0br7/IMG-1239.jpg" width = "300px" className="about-img"/>
      <Programmer />
      </div>
    </div>
  );
}

export default About;
