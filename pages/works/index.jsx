import Hero from "@/components/hero";
import Meta from "@/components/meta";
import classes from 'styles/works.module.scss';

const Works = () => {
    return (
        <>
            <Meta pageTitle='Works' pageDesc='これまでに作った作品一覧' />
            <Hero title='Works' backGround='orange' />
            <ul className={classes.flexContainer}>
            </ul>
        </>
    )
}

export default Works;