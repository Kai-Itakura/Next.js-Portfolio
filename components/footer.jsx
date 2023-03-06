import { faEnvelope } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Footer = () => {
    return (
        <footer>
            <h2>Contact</h2>
            <address>
                <FontAwesomeIcon icon={faEnvelope} size='lg' color="rgb(75, 126, 232)" />
                <a href="mailto:itakai199969@gmail.com">itakai199969@gmail.com</a>
            </address>
        </footer>
    );
}

export default Footer;