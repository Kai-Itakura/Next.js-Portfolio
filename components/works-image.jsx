import Image from 'next/legacy/image';
import classes from 'styles/works-image.module.scss';

const WorksImage = ({ mockUp, img1, img2 }) => {
    return (
        <div className={classes.wrapper}>
            <figure className={classes.mockUp}>
                <Image
                    src={mockUp.url}
                    alt=''
                    layout='responsive'
                    width={mockUp.width}
                    height={mockUp.height}
                    sizes='90vw'
                />
            </figure>
            <ul className={classes.flexContainer}>
                <li className={classes.compImage}>
                    <Image
                        src={img1.url}
                        alt=''
                        layout='fill'
                        objectFit='cover'
                        sizes='40vw'
                    />
                </li>
                <li className={classes.compImage}>
                    <Image
                        src={img2.url}
                        alt=''
                        layout='fill'
                        objectFit='cover'
                        sizes='40vw'
                    />
                </li>
            </ul>
        </div>
    );
}

export default WorksImage;