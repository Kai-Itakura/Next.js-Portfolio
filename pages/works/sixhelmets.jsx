import Meta from "@/components/meta";
import WorksBody from "@/components/works-body";
import WorksHeader from "@/components/works-header";
import WorksImage from "@/components/works-image";
import { getPostBySlug } from "@/lib/api";
import { getPlaiceholder } from "plaiceholder";
import classes from 'styles/sixhelmets.module.scss';

const Sixhelmets = ({
    title, tools, time, desc, url, mockUp, img1, img2, heroImg, metaDesc
}) => {
    return (
        <>
            <Meta
                pageTitle={title}
                pageDesc={metaDesc}
            />
            <WorksHeader title={title} heroImg={heroImg} />
            <div className={classes.wrapper}>
                <WorksBody
                    title={title}
                    tools={tools}
                    desc={desc}
                    time={time}
                    url={url}
                />
                <WorksImage
                    mockUp={mockUp}
                    img1={img1}
                    img2={img2}
                    url={url}
                />
            </div>
        </>
    );
}

export const getStaticProps = async () => {
    const slug = 'sixhelmets'

    const post = await getPostBySlug(slug);

    const metaDesc = post.description.slice(0, 80) + '...';

    const images = [post.mockUpImage, post.image1, post.image2, post.heroImage];
    for (let i = 0; i < images.length; i++) {
        const { base64 } = await getPlaiceholder(images[i].url);
        images[i].blurDataURL = base64;
    }

    // const { base64 } = await getPlaiceholder(post.heroImage.url);
    // post.heroImage.blurDataURL = base64;

    return {
        props: {
            title: post.title,
            tools: post.tools,
            time: post.time,
            desc: post.description,
            url: post.url,
            mockUp: post.mockUpImage,
            img1: post.image1,
            img2: post.image2,
            heroImg: post.heroImage,
            metaDesc: metaDesc,
        }
    }
}

export default Sixhelmets;