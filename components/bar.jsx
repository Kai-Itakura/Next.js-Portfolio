import Image from 'next/legacy/image';
import { useEffect, useRef, useState } from 'react';
import classes from 'styles/bar.module.scss';

const Bar = ({ title, src, dataPer }) => {
    const refBar = useRef([]);
    const refNum = useRef([]);
    // const [count, setCount] = useState(0);

    useEffect(() => {
        const allBar = document.querySelectorAll('[data-percentage]');
        const allNum = document.querySelectorAll('[data-num]');

        refBar.current = Array.from(allBar);
        refNum.current = Array.from(allNum);

        for (let i = 0; i < refBar.current.length; i++) {
            let flag = false;

            document.addEventListener('scroll', () => {
                const getElementDistance = refBar.current[i].getBoundingClientRect().bottom;

                if (window.innerHeight > getElementDistance && flag != true) {
                    flag = true;

                    const bar = refBar.current[i];
                    const num = refNum.current[i];
                    const percentageVal = refBar.current[i].dataset.percentage;
                    const addStyle = () => {
                        bar.style.width = `${count}%`; 
                        num.textContent = `${count}%`;
                    }

                    let count = 0;
                    const intervalId = setInterval(() => {
                        count ++;
                        addStyle();
                        if (count >= percentageVal) {
                            clearInterval(intervalId);
                        }
                    }, 20);
                }
            })
        }
    }, [])

    return (
        <li className={classes.wrapper}>
            <div className={classes.title}>
                <div className={classes.image}>
                    <Image
                        src={src}
                        alt={title}
                        layout='fill'
                        objectFit='contain'
                    />
                </div>
                <h4>{title}</h4>
            </div>
            <div className={classes.barBox}>
                <span
                    className={classes.skillBar}
                    data-percentage={dataPer}
                    ref={refBar}
                    // style={{ width: `${count}%` }}
                />
                <p className={classes.skillNum}>
                    {/* {count}% */}
                    <span ref={refNum} data-num={dataPer} />
                </p>
            </div>
        </li>
    );
}

export default Bar;