import Image from 'next/legacy/image';
import classes from 'styles/works-image.module.scss';
import Button from './button';

const WorksImage = ({ mockUp, img1, img2, url }) => {
    return (
        <div className={classes.wrapper}>
            <figure className={classes.mockUp}>
                <Image
                    key={mockUp.url}
                    src={mockUp.url}
                    alt=''
                    layout='responsive'
                    width={mockUp.width}
                    height={mockUp.height}
                    sizes='90vw'
                    placeholder='blur'
                    blurDataURL={mockUp.blurDataURL}
                />
            </figure>
            <ul className={classes.flexContainer}>
                <li className={classes.compImage}>
                    <Image
                        key={img1.url}
                        src={img1.url}
                        alt=''
                        layout='fill'
                        objectFit='cover'
                        objectPosition='50% 0'
                        sizes='40vw'
                        placeholder='blur'
                        blurDataURL={img1.blurDataURL}
                    />
                </li>
                <li className={classes.compImage}>
                    <Image
                        key={img2.url}
                        src={img2.url}
                        alt=''
                        layout='fill'
                        objectFit='cover'
                        objectPosition='50% 0'
                        sizes='40vw'
                        placeholder='blur'
                        blurDataURL={img2.blurDataURL}
                    />
                </li>
            </ul>
            <Button url={url} />
        </div>
    );
}

export default WorksImage;