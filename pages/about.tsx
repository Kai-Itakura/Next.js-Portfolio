import Container from '@/components/container'
import Hero from '@/components/hero'
import Hobby from '@/components/hobby'
import Meta from '@/components/meta'
import Profile from '@/components/profile'
import Skills from '@/components/skills'
import { NextPage } from 'next'

const About: NextPage = () => {
  return (
    <>
      <Meta pageTitle='About' />
      <Hero title='About' subtitle='私について' backGround='blue' />
      <Container title='profile'>
        <Profile />
      </Container>
      <Container title='skills'>
        <Skills />
      </Container>
      <Container title='hobby'>
        <Hobby />
      </Container>
    </>
  )
}

export default About
