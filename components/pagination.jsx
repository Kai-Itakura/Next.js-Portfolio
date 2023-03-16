import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Link from 'next/link';
import classes from 'styles/pagination.module.scss';

const Pagination = ({
    prevText = '',
    nextText = '',
    prevUrl = '',
    nextUrl = '',
}) => {
    return (
        <ul className={classes.flexContainer}>
            {prevText && prevUrl && (
                <li className={classes.prev}>
                    <Link href={prevUrl} className={classes.iconText}>
                        <FontAwesomeIcon icon={faChevronLeft} />
                        <span>{prevText}</span>
                    </Link>
                </li>
            )}
            {nextText && nextUrl && (
                <li className={classes.next}>
                    <Link href={nextUrl} className={classes.iconText}>
                        <span>{nextText}</span>
                        <FontAwesomeIcon icon={faChevronRight} />
                    </Link>
                </li>
            )}
        </ul>
    );
}

export default Pagination;