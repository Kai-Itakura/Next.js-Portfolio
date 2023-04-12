import Meta from '@/components/meta'
import Pagination from 'components/pagination'
import WorksBody from 'components/works-body'
import WorksHeader from 'components/works-header'
import WorksImage from 'components/works-image'
import { getAllSlugs, getPostBySlug } from 'lib/api'
import { prevNextWork } from 'lib/prev-next-work'
import { getPlaiceholder } from 'plaiceholder'

const Slug = ({ title, tools, time, desc, url, mockUp, img1, img2, heroImg, metaDesc, lang, prevWork, nextWork }) => {
  return (
    <>
      <Meta pageTitle={title} pageDesc={metaDesc} />
      <WorksHeader title={title} heroImg={heroImg} lang={lang} />
      <WorksBody title={title} tools={tools} desc={desc} time={time} url={url} />
      <WorksImage mockUp={mockUp} img1={img1} img2={img2} url={url} />
      <Pagination
        prevText={prevWork.title}
        prevUrl={`/works/${prevWork.slug}`}
        nextText={nextWork.title}
        nextUrl={`/works/${nextWork.slug}`}
      />
    </>
  )
}

export const getStaticPaths = async () => {
  const allSlugs = await getAllSlugs()

  return {
    paths: allSlugs.map(({ slug }) => `/works/${slug}`),
    fallback: false
  }
}

export const getStaticProps = async (context) => {
  const slug = context.params.slug

  const post = await getPostBySlug(slug)

  const metaDesc = post.description.slice(0, 80) + '...'

  const images = [post.mockUpImage, post.image1, post.image2, post.heroImage]
  for (let i = 0; i < images.length; i++) {
    const { base64 } = await getPlaiceholder(images[i].url)
    images[i].blurDataURL = base64
  }

  const allSlugs = await getAllSlugs()
  const [prevWork, nextWork] = prevNextWork(allSlugs, slug)

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
      lang: post.lang,
      metaDesc: metaDesc,
      prevWork: prevWork,
      nextWork: nextWork
    }
  }
}

export default Slug
