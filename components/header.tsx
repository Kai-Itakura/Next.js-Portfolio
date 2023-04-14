import Nav from './nav'
import SnsLinks from './sns-links'
import classes from 'styles/header.module.scss'
import { useEffect, useState } from 'react'

const Header: React.FC = () => {
  const [scrollY, setScrollY] = useState(0)
  const [headerColor, setHeaderColor] = useState('transparent')

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.pageYOffset)
    }

    window.addEventListener('scroll', handleScroll)
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  useEffect(() => {
    if (scrollY > 450) {
      setHeaderColor('rgb(58, 61, 62, .5)')
    } else {
      setHeaderColor('transparent')
    }
  }, [scrollY])

  return (
    <header>
      <div style={{ backgroundColor: headerColor }} className={classes.flexContainer}>
        <Nav />
        <SnsLinks />
      </div>
    </header>
  )
}

export default Header
