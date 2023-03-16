import Image from 'next/legacy/image';
import Link from 'next/link';
import classes from 'styles/posts.module.scss';

const Posts = ({ allWorks }) => {
    return (
        <ul className={classes.gridContainer}>
            {allWorks.map(({ title, slug, topImage }) => (
                <li className={classes.work} key={slug}>
                    <Link href={`/works/${slug}`}>
                        <figure className={classes.figure}>
                            <Image
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
            ))}
        </ul>
    );
}

export default Posts;