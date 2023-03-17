import classes from 'styles/skills.module.scss';
import Bar from './bar';

const Skills = () => {
    return (
        <div className={classes.wrapper}>
            <ul className={classes.list}>
                <Bar
                    title='HTML/CSS'
                    src='/html-icon.svg'
                    dataPer={80}
                />
                <Bar
                    title='JavaScript'
                    src='/javascript-icon.svg'
                    dataPer={60}
                />
                <Bar
                    title='Sass'
                    src='/sass-icon.svg'
                    dataPer={70}
                />
                <Bar
                    title='Illustrator'
                    src='/illustrator-icon.svg'
                    dataPer={60}
                />
                <Bar
                    title='Photoshop'
                    src='/photoshop-icon.svg'
                    dataPer={60}
                />
                <Bar
                    title='XD'
                    src='/xd-icon.svg'
                    dataPer={70}
                />
            </ul>
        </div>
    );
}

export default Skills;