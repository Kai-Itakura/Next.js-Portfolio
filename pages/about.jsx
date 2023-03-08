import Hero from "@/components/hero";
import Hobby from "@/components/hobby";
import Profile from "@/components/profile";
import Skills from "@/components/skills";
// import classes from 'styles/about.module.scss';

const About = () => {
    return (
        <>
            <Hero title='About' subtitle='私について' backGround='blue' />
            <Profile />
            <Skills />
            <Hobby />
        </>
    );
}

export default About;