import { Link } from "react-router-dom";

function NavBar() {
  return (
    <navbar className = 'nav'>
        <div span className = "font-link">
      <Link to="/" span className = 'name'>Mayleen</Link>
      </div>
      <div>
      <Link to="/about">About</Link>
      </div>
      <div>
      <Link to="/projects">Projects</Link>
      </div>
      <div>
      <Link to="/contact">Contact</Link>
      </div>
    </navbar>
  );
}

export default NavBar;
