import { HobbyListContent } from '@/types/Type'
import Image from 'next/legacy/image'
import classes from 'styles/hobby-list.module.scss'

const HobbyList: React.FC<HobbyListContent> = ({ src, title, desc }) => {
  return (
    <li className={classes.wrapper}>
      <figure className={classes.image}>
        <Image key={src.src} src={src} alt={title} layout='fill' objectFit='cover' placeholder='blur' />
      </figure>
      <h3 className={classes.title}>{title}</h3>
      <p className={classes.description}>{desc}</p>
    </li>
  )
}

export default HobbyList
