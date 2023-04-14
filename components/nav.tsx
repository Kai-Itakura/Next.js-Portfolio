import Link from 'next/link'
import { useState } from 'react'
import classes from 'styles/nav.module.scss'

const Nav: React.FC = () => {
  const [navIsOpen, setNavIsOpen] = useState(false)

  const toggleNav = () => {
    setNavIsOpen((prev) => !prev)
  }

  return (
    <nav className={navIsOpen ? classes.open : classes.close}>
      {navIsOpen && (
        <style jsx global>{`
          @media (max-width: 767px) {
            body {
              overflow: hidden;
              position: fixed;
              width: 100%;
            }
          }
        `}</style>
      )}
      <button className={classes.btn} onClick={toggleNav}>
        <span className={classes.bar}></span>
        <span className='sr-only'>menu</span>
      </button>
      <ul className={classes.list}>
        <li>
          <Link onClick={toggleNav} href='/'>
            Top
          </Link>
        </li>
        <li>
          <Link onClick={toggleNav} href='/works'>
            Works
          </Link>
        </li>
        <li>
          <Link onClick={toggleNav} href='/about'>
            About
          </Link>
        </li>
      </ul>
    </nav>
  )
}

export default Nav
