import { faCircleCheck } from '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import classes from 'styles/definition-list.module.scss'
import parse from 'html-react-parser'
import { DefinitionListContent } from '@/types/Type'

const DefinitionList: React.FC<DefinitionListContent> = ({ title, desc, ja = false }) => {
  const parseString = () => {
    if (typeof desc === 'string') {
      return parse(desc)
    } else {
      return desc
    }
  }

  return (
    <>
      <dt className={classes.title}>{title}</dt>
      <dd className={ja ? classes.jaDesc : classes.desc}>
        {Array.isArray(desc) ? (
          <ul>
            {desc.map((tools, index) => (
              <li className={classes.flexContainer} key={index}>
                <FontAwesomeIcon icon={faCircleCheck} />
                <p>{tools}</p>
              </li>
            ))}
          </ul>
        ) : (
          parseString()
        )}
      </dd>
    </>
  )
}

export default DefinitionList
