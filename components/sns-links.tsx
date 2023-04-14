import { faGithub, faInstagram } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import classes from 'styles/sns-links.module.scss'

const SnsLinks: React.FC = () => {
  return (
    <ul className={classes.list}>
      <li className={classes.icon}>
        <a href='https://github.com/Kai-Itakura' target='_blank' rel='noopener noreferrer'>
          <FontAwesomeIcon icon={faGithub} />
          <span className='sr-only'>GitHub</span>
        </a>
      </li>
      <li className={classes.icon}>
        <a href='https://www.instagram.com/kai_itakura/' target='_blank' rel='noopener noreferrer'>
          <FontAwesomeIcon icon={faInstagram} />
          <span className='sr-only'>Instagram</span>
        </a>
      </li>
    </ul>
  )
}

export default SnsLinks
