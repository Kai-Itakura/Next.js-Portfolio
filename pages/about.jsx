import Hero from "@/components/hero";
import Profile from "@/components/profile";
import Skills from "@/components/skills";
// import classes from 'styles/about.module.scss';

const About = () => {
    return (
        <>
            <Hero title='About' subtitle='私について' backGround='blue' />
            <Profile />
            <Skills />
        </>
    );
}

export default About;