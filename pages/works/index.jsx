import Hero from "@/components/hero";
import Meta from "@/components/meta";
import Posts from "@/components/posts";
import { getAllWorks } from "@/lib/api";
import { getPlaiceholder } from "plaiceholder";

const Works = ({ allWorks }) => {
    return (
        <>
            <Meta pageTitle='Works' pageDesc='これまでに作った作品一覧' />
            <Hero title='Works' backGround='orange' />
            <Posts allWorks={allWorks} />
        </>
    )
}

export const getStaticProps = async () => {
    const allWorks = await getAllWorks();

    for (const work of allWorks) {
        const { base64 } = await getPlaiceholder(work.topImage.url);
        work.topImage.blurDataURL = base64;
    }

    return {
        props: {
            allWorks: allWorks,
        }
    }
}

export default Works;