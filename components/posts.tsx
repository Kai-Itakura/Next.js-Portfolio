import { allWorksContent } from '@/types/Type'
import Image from 'next/legacy/image'
import Link from 'next/link'
import classes from 'styles/posts.module.scss'

type Props = {
  allWorks: allWorksContent[] | allWorksContent
}

const Posts: React.FC<Props> = ({ allWorks }) => {
  console.log(allWorks)
  return (
    <ul className={classes.gridContainer}>
      {Array.isArray(allWorks) ? (
        allWorks.map(({ title, slug, topImage }) => (
          <li className={classes.work} key={slug}>
            <Link href={`/works/${slug}`}>
              <figure className={classes.figure}>
                <Image
                  key={topImage.url}
                  src={topImage.url}
                  alt={title}
                  layout='fill'
                  objectFit='cover'
                  objectPosition='50% 0'
                  sizes='40vw'
                  placeholder='blur'
                  blurDataURL={topImage.blurDataURL}
                  className={classes.image}
                />
              </figure>
              <h3 className={classes.title}>{title}</h3>
            </Link>
          </li>
        ))
      ) : (
        <li className={classes.work} key={allWorks.slug}>
          <Link href={`/works/${allWorks.slug}`}>
            <figure className={classes.figure}>
              <Image
                key={allWorks.topImage.url}
                src={allWorks.topImage.url}
                alt={allWorks.title}
                layout='fill'
                objectFit='cover'
                objectPosition='50% 0'
                sizes='40vw'
                placeholder='blur'
                blurDataURL={allWorks.topImage.blurDataURL}
                className={classes.image}
              />
            </figure>
            <h3 className={classes.title}>{allWorks.title}</h3>
          </Link>
        </li>
      )}
    </ul>
  )
}

export default Posts
