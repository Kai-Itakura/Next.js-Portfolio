import Nav from "./nav";
import SnsLinks from "./sns-links";
import classes from 'styles/header.module.scss';

const Header = () => {
    return (
        <header>
            <div className={classes.flexContainer}>
                <Nav />
                <SnsLinks />
            </div>
        </header>
    );
}

export default Header;