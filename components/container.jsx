import classes from 'styles/container.module.scss';

const Container = ({ title, children }) => {
    return (
        <div className={classes.container}>
            <h2 className={classes.title}>{title}</h2>
            {children}
        </div>
    );
}

export default Container;