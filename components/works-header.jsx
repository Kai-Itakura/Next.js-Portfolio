import Image from 'next/legacy/image';
import classes from 'styles/works-header.module.scss';

const WorksHeader = ({ title, heroImg }) => {
    return (
        <div className={classes.wrapper}>
            <figure className={classes.hero}>
                <Image
                    src={heroImg.url}
                    alt={title}
                    layout='fill'
                    objectFit='cover'
                    sizes='100vw'
                    style={{ filter: 'brightness(40%)' }}
                />
            </figure>
            <h2 className={classes.title}>{title}</h2>
        </div>
    );
}

export default WorksHeader;