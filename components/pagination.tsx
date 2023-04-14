import { PaginationContent } from '@/types/Type'
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Link from 'next/link'
import classes from 'styles/pagination.module.scss'

const Pagination: React.FC<PaginationContent> = ({ prevText = '', nextText = '', prevUrl = '', nextUrl = '' }) => {
  return (
    <ul className={classes.flexContainer}>
      {nextText && nextUrl && (
        <li>
          <Link href={nextUrl} className={classes.iconText}>
            <FontAwesomeIcon icon={faChevronLeft} />
            <span>{nextText}</span>
          </Link>
        </li>
      )}
      {prevText && prevUrl && (
        <li className={classes.prev}>
          <Link href={prevUrl} className={classes.iconText}>
            <span>{prevText}</span>
            <FontAwesomeIcon icon={faChevronRight} />
          </Link>
        </li>
      )}
    </ul>
  )
}

export default Pagination
