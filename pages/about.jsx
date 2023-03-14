import Hero from "@/components/hero";
import Hobby from "@/components/hobby";
import Meta from "@/components/meta";
import Profile from "@/components/profile";
import Skills from "@/components/skills";

const About = () => {
    return (
        <>
            <Meta pageTitle='About' />
            <Hero title='About' subtitle='私について' backGround='blue' />
            <Profile />
            <Skills />
            <Hobby />
        </>
    );
}

export default About;