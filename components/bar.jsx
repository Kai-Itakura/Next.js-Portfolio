import Image from 'next/legacy/image';
import classes from 'styles/bar.module.scss';

const Bar = ({ title, src, dataPer }) => {
    return (
            <li className={classes.wrapper}>
                <div className={classes.title}>
                    <div className={classes.image}>
                        <Image
                            src={src}
                            alt={title}
                            layout='fill'
                            objectFit='cover'
                        />
                    </div>
                    <h4>{title}</h4>
                </div>
                <div className={classes.barBox}>
                    <span className={classes.skillBar} data-percentage={dataPer}></span>
                    <p className={classes.skillNum}><span data-num=""></span></p>
                </div>
            </li>
    );
}

export default Bar;