import Hero from 'components/hero'
import Meta from 'components/meta'
import Posts from 'components/posts'
import Button from 'components/button'
import { getAllWorks } from 'lib/api'
import { getPlaiceholder } from 'plaiceholder'
import Container from 'components/constainer'
import { useEffect, useState } from 'react'
import Profile from 'components/profile'

const Home = ({ works }) => {
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768)
    }

    handleResize()
    window.addEventListener('resize', handleResize)

    return () => window.removeEventListener('resize', handleResize)
  }, [])

  const numWorks = isMobile ? works[0] : works

  return (
    <>
      <Meta />
      <Hero title='Kai Itakura' subtitle='Web Creator' />
      <Container title='works'>
        <Posts allWorks={numWorks} />
        <Button url='/works' local btnText='More Works' />
      </Container>
      <Container title='about'>
        <Profile />
        <Button url='/about' local btnText='More About Me' />
      </Container>
    </>
  )
}

export const getStaticProps = async () => {
  const works = await getAllWorks(2)

  for (const work of works) {
    const { base64 } = await getPlaiceholder(work.topImage.url)
    work.topImage.blurDataURL = base64
  }

  return {
    props: {
      works: works,
    },
  }
}

export default Home
