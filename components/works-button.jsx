import classes from 'styles/works-button.module.scss';

const WorksButton = ({ url }) => {
    return (
        <a className={classes.btn} href={url} target='_blank' rel='noopener noreferrer'>
            Visit Website
        </a>
    );
}

export default WorksButton;