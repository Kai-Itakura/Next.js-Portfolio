import { WorksHeaderContent } from '@/types/Type'
import Image from 'next/legacy/image'
import classes from 'styles/works-header.module.scss'

const WorksHeader: React.FC<WorksHeaderContent> = ({ title, heroImg, lang }) => {
  return (
    <div className={classes.wrapper}>
      <figure className={classes.hero}>
        <Image
          key={heroImg.url}
          src={heroImg.url}
          alt={title}
          layout='fill'
          objectFit='cover'
          sizes='100vw'
          style={{ filter: 'brightness(40%)' }}
          priority
          placeholder='blur'
          blurDataURL={heroImg.blurDataURL}
        />
      </figure>
      <h2 className={lang ? classes.jaTitle : classes.title}>{title}</h2>
    </div>
  )
}

export default WorksHeader
