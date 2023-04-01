import Background from "../components/Background";
import Programmer from "../components/Programmer";
function About() {
  return (
    <div  className = "side-story-div">
      {/* <Skills/> */}
      <div id = "side-story">
      <Background />
      <img src="https://as1.ftcdn.net/v2/jpg/05/16/19/52/1000_F_516195286_9VkHlOEuzUaWQjalbSKQEmntmErpMMkI.jpg" width = "300px" height = "300px" className="about-img" alt="headshot-img"/>
      <Programmer />
      </div>
    </div>
  );
}

export default About;
