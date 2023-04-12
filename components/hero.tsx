/* eslint-disable prefer-const */
import { useEffect } from 'react'
import classes from 'styles/hero.module.scss'
import { HeroProps } from '@/types/Type'

const Hero = ({ title, subtitle = false, backGround }: HeroProps) => {
  useEffect(() => {
    const bubbleArea: HTMLElement | null = document.querySelector('#bubble-area')

    const createBubble = () => {
      const bubble = document.createElement('span')
      bubble.className = `${classes.bubble}`

      const minSize = 10
      const maxSize = 40

      let bubbleSize = Math.random() * (maxSize - minSize) + minSize

      bubble.style.width = `${bubbleSize}px`
      bubble.style.height = `${bubbleSize}px`
      bubble.style.left = `${Math.random() * 100}%`
      bubble.style.bottom = `${Math.random() * 100}%`

      if (bubbleArea) bubbleArea.appendChild(bubble)

      setTimeout(() => {
        bubble.remove()
      }, 8000)
    }

    const intervalId = setInterval(createBubble, 100)

    return () => clearInterval(intervalId)
  }, [])

  return (
    <div
      id='bubble-area'
      className={`
        ${classes.container} 
        ${backGround && classes[backGround]}
        `}
    >
      <div className={classes.flexCenter}>
        <div>
          <h1 className={classes.title}>{title}</h1>
          {subtitle && <p className={classes.subtitle}>{subtitle}</p>}
        </div>
      </div>
    </div>
  )
}

export default Hero
