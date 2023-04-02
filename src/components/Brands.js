import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin, faMedium } from "@fortawesome/free-brands-svg-icons";

function Brands() {
    return (
        <div className = "brands">
            <a href="https://github.com/MayleenZ" target="_blank" rel="noreferrer" className = "brand-links">
            <FontAwesomeIcon icon={faGithub} size="2x" />
            </a>
            <a href="https://www.linkedin.com/in/mayleenzhagnay/" target="_blank" rel="noreferrer" className = "brand-links">
            <FontAwesomeIcon icon = {faLinkedin} size = "2x" />
            </a>
            <a href="https://medium.com/@mayleennyc" target="_blank" rel="noreferrer" className = "brand-links">
            <FontAwesomeIcon icon={faMedium} size = "2x" />
            </a>
        </div>
    )
}

export default Brands