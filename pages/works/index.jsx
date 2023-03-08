import Hero from "@/components/hero";
import classes from 'styles/works.module.scss';

const Works = () => {
    return (
        <>
            <Hero title='Works' backGround='orange' />
            <ul className={classes.flexContainer}>
            </ul>
        </>
    )
}

export default Works;