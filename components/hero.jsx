import classes from 'styles/hero.module.scss'

const Hero = ({ title, subtitle = false }) => {
    return (
        <div className={classes.container}>
            <div className={classes.text}>
                <h1 className={classes.title}>{title}</h1>
                {subtitle && <p className={classes.subtitle}>{subtitle}</p>}
            </div>
        </div>
    );
}

export default Hero;