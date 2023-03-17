import classes from 'styles/hobby.module.scss';
import HobbyList from './hobby-list';
import dance from 'images/dance.jpg';
import fashion from 'images/fashion.jpg';
import soccer from 'images/soccer.jpg';

const Hobby = () => {
    return (
        <div className={classes.wrapper}>
            <ul className={classes.list}>
                <HobbyList
                    src={dance}
                    title='ballroom dance'
                    desc='大学の時には勉強よりもダンスに明け暮れていました。小学生から高校まではサッカーだけしかしてこなかったのですが、大学で競技ダンスに出会い、毎日のように踊っていました。その結果、関西ではファイナリストになったり、タンゴという種目で優勝などの成績を収めることができました。'
                />
                <HobbyList
                    src={soccer}
                    title='soccer'
                    desc=' 大学に入るまではサッカー一筋の生活を送っていました。将来の夢はもちろんサッカー選手。頭の中はサッカーのことでいっぱいで、朝から晩までボールを蹴り続けていました。高校時代には石川県で準優勝という結果も残しました。現在も友達や先輩とサッカーやフットサルをしています。'
                />
                <HobbyList
                    src={fashion}
                    title='fashion'
                    desc=' 学生時代はサッカーやダンスに明け暮れていましたが、それと並行して、好きだったのがファッションです。服はもちろん、かっこいい・かわいいものやデザインが好きです。学生の頃は、欲しい洋服を買うためにご飯を抜いていた時期もありました。'
                />
            </ul>
        </div>
    );
}

export default Hobby;