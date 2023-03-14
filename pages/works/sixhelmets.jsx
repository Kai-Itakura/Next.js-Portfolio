import WorksHeader from "@/components/works-header";
import { getPostBySlug } from "@/lib/api";

const Sixhelmets = ({
    title, tools, time, desc, url, mockUp, img1, img2, heroImg
}) => {
    return (
        <WorksHeader title={title} heroImg={heroImg} />
    );
}

export const getStaticProps = async () => {
    const slug = 'sixhelmets'

    const post = await getPostBySlug(slug);

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
        }
    }
}

export default Sixhelmets;