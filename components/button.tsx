import { ButtonContent } from '@/types/Type'
import { faArrowUpRightFromSquare, faForward } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Link from 'next/link'
import classes from 'styles/button.module.scss'

const Button: React.FC<ButtonContent> = ({ url, local = false, btnText }) => {
  return (
    <>
      {local ? (
        <Link className={classes.btnLocal} href={url}>
          <span>{btnText}</span>
          <FontAwesomeIcon icon={faForward} />
        </Link>
      ) : (
        <a className={classes.btn} href={url} target='_blank' rel='noopener noreferrer'>
          <span>Visit Website</span>
          <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
        </a>
      )}
    </>
  )
}

export default Button
