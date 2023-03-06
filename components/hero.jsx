import classes from 'styles/hero.module.scss'

const Hero = ({ title, subtitle = false, backGround }) => {
    return (
        <div className={`
        ${classes.container} 
        ${backGround && classes[backGround]}
        `}>
            <div className={classes.flexCenter}>
                <div>
                    <h1 className={classes.title}>{title}</h1>
                    {subtitle && <p className={classes.subtitle}>{subtitle}</p>}
                </div>
            </div>
        </div>
    );
}

export default Hero;