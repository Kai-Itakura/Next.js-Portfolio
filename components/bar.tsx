import { BarContent } from '@/types/Type'
import Image from 'next/legacy/image'
import { useEffect } from 'react'
import classes from 'styles/bar.module.scss'

const Bar = ({ title, src, dataPer }: BarContent) => {
  useEffect(() => {
    const allBar: NodeListOf<HTMLElement> = document.querySelectorAll('[data-percentage]')
    const allNum: NodeListOf<HTMLElement> = document.querySelectorAll('[data-num]')

    if (!allBar.length) return

    for (let i = 0; i < allBar.length; i++) {
      let flag = false

      document.addEventListener('scroll', () => {
        const getElementDistance = allBar[i].getBoundingClientRect().bottom

        if (window.innerHeight > getElementDistance && flag != true) {
          flag = true

          const bar = allBar[i]
          const num = allNum[i]
          const percentageVal = Number(allBar[i].dataset.percentage)
          const addStyle = () => {
            bar.style.width = `${count}%`
            num.textContent = `${count}%`
          }

          let count = 0
          const intervalId = setInterval(() => {
            count++
            addStyle()
            if (count >= percentageVal) {
              clearInterval(intervalId)
            }
          }, 20)
        }
      })
    }
  }, [])

  return (
    <li className={classes.wrapper}>
      <div className={classes.title}>
        <div className={classes.image}>
          <Image src={src} alt={title} layout='fill' objectFit='contain' />
        </div>
        <h4>{title}</h4>
      </div>
      <div className={classes.barBox}>
        <span className={classes.skillBar} data-percentage={dataPer} />
        <p className={classes.skillNum}>
          <span data-num={dataPer} />
        </p>
      </div>
    </li>
  )
}

export default Bar
