import Hero from "@/components/hero";
import Meta from "@/components/meta";
import Posts from "@/components/posts";
import Button from "@/components/button";
import { getAllWorks } from "@/lib/api";
import { getPlaiceholder } from "plaiceholder";

const Home = ({ works }) => {
  return (
    <>
      <Meta />
      <Hero title='Kai Itakura' subtitle='Web Creator' />
      <Posts allWorks={works} />
      <Button url='/works' local btnText='More Works' />
    </>
  );
}

export const getStaticProps = async () => {
  const works = await getAllWorks(2);

  for (const work of works) {
    const { base64 } = await getPlaiceholder(work.topImage.url);
    work.topImage.blurDataURL = base64;
  }

  return {
    props: {
      works: works,
    }
  }
}

export default Home;