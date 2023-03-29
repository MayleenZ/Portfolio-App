import { Link } from "react-router-dom";

function NavBar() {
  return (
    <navbar className = 'nav'>
        <div span className = "font-link">
      <Link to="/" span className = 'name'>Mayleen</Link>
      </div>
      <div>
      <Link to="/about">ABOUT</Link>
      </div>
      <div>
      <Link to="/projects">PROJECTS</Link>
      </div>
      <div>
      <Link to="/contact">CONTACT</Link>
      </div>
    </navbar>
  );
}

export default NavBar;
