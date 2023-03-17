import { faArrowUpRightFromSquare, faForward } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Link from 'next/link';
import classes from 'styles/button.module.scss';

const Button = ({ url, local = false, btnText }) => {
    // return (
    //     <a className={classes.btn} href={url} target='_blank' rel='noopener noreferrer'>
    //         Visit Website
    //     </a>
    // );
    return (
        <>
            {local ? (
                <div className={classes.btnLocal} >
                    <Link className={classes.iconText} href={url}>
                        <span>{btnText}</span>
                        <FontAwesomeIcon icon={faForward} />
                    </Link>
                </div>
            ) : (
                <div className={classes.btn}>
                    <a className={classes.iconText} href={url} target='_blank' rel='noopener noreferrer'>
                        <span>Visit Website</span>
                        <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
                    </a>
                </div>
            )}
        </>
    )
}

export default Button;