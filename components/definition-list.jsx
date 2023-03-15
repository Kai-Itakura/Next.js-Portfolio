import { faCircleCheck } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classes from 'styles/definition-list.module.scss';
import parse from 'html-react-parser';

const DefinitionList = ({ title, desc, ja = false }) => {
    const parseString = () => {
        if (typeof desc === 'string') {
            return parse(desc);
        } else {
            return desc;
        }
    }
    
    return (
        <>
            <dt className={classes.title}>{title}</dt>
            <dd className={ja ? classes.jaDesc : classes.desc}>{
                Array.isArray(desc)
                    ? (
                        <ul>
                            {desc.map((tools) => (
                                <li className={classes.flexContainer}>
                                    <FontAwesomeIcon icon={faCircleCheck} />
                                    <p>{tools}</p>
                                </li>
                            ))}
                        </ul>
                    ) :
                    parseString()
            }</dd>
        </>
    );
}

export default DefinitionList;