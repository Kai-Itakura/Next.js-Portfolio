import classes from 'styles/works-body.module.scss';
import DefinitionList from './definition-list';
import WorksButton from './works-button';

const WorksBody = ({ title, tools, time, desc, url }) => {
    return (
        <>
            <dl className={classes.wrapper}>
                <DefinitionList title='client' desc={title} />
                <DefinitionList title='tools' desc={tools} />
                <DefinitionList title='creation time' desc={time} ja />
                <DefinitionList title='about' desc={desc} ja />
            </dl>
            <WorksButton url={url} />
        </>
    );
}

export default WorksBody;