import Link from "next/link";
import classes from 'styles/nav.module.scss';

const Nav = () => {
    return (
        <nav>
            <ul className={classes.list}>
                <li>
                    <Link href='/'>Top</Link>
                </li>
                <li>
                    <Link href='/works'>Works</Link>
                </li>
                <li>
                    <Link href='/about'>About</Link>
                </li>
            </ul>
        </nav>
    );
}

export default Nav;