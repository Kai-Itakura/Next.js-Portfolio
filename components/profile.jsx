import Image from 'next/legacy/image';
import classes from 'styles/profile.module.scss';
import profile from 'images/profile-image.jpg';

const Profile = () => {
    return (
        <div className={classes.wrapper}>
            <div className={classes.flexContainer}>
                <figure>
                    <Image
                        key={profile}
                        src={profile}
                        alt='板倉海'
                        layout='fill'
                        objectFit='cover'
                        sizes='(min-width: 768px) 440px, 80%'
                        placeholder='blur'
                    />
                </figure>
                <div className={classes.description}>
                    <h3>板倉　海</h3>
                    <p>1999年6月9日に生まれ、石川県で育ちました。大学進学と同時に大阪に住み始め、2022年に関西外国語大学を卒業。その後、新卒で派遣会社に就職しました。入社してすぐ、元々興味があったクリエイティブな仕事への気持ちが大きくなっていきました。そこで、1からやり直し挑戦するために仕事を辞め、デジタルハリウッドのWebデザイナー専攻にてWebデザインを学びました。Webサイトの構築をゼロからおこなうことによって、コーディングが楽しいという気持ちに気が付きました。現在は独学でフロントエンドについて学んでおり、今後は技術力をあげ、ユーザーが熱狂するようなWebサービス、アプリケーションを作っていきたいと考えております。</p>
                </div>
            </div>
        </div>
    );
}

export default Profile;