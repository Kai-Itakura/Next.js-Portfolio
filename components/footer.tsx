import { faEnvelope } from '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import classes from 'styles/footer.module.scss'

const Footer: React.FC = () => {
  return (
    <footer>
      <div className={classes.wrapper}>
        <h2 className={classes.title}>Contact</h2>
        <address className={classes.flexContainer}>
          <FontAwesomeIcon className={classes.icon} icon={faEnvelope} size='lg' color='rgb(75, 126, 232)' />
          <a href='mailto:itakai199969@gmail.com'>itakai199969@gmail.com</a>
        </address>
      </div>
    </footer>
  )
}

export default Footer
