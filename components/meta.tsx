import Head from 'next/head'
import { siteMeta } from '@/lib/constants'
import { useRouter } from 'next/router'
import siteImg from 'images/portfolio.png'

const { siteTitle, siteDesc, siteUrl, siteLocale, siteType, appleTouchIcon, siteIcon } = siteMeta

const imgUrl = `${siteUrl}${siteImg.src}`

interface MetaProps {
  pageTitle?: string
  pageDesc?: string
}

const Meta: React.FC<MetaProps> = ({ pageTitle, pageDesc }) => {
  const title = pageTitle ? `${pageTitle} | ${siteTitle}` : siteTitle
  const desc = pageDesc ?? siteDesc
  const router = useRouter()
  const url = `${siteUrl}${router.asPath}`

  return (
    <Head>
      <title>{title}</title>
      <meta property='og:title' content={`${pageTitle} | ${siteTitle}`} />
      <meta name='description' content={desc} />
      <meta property='og:description' content={desc} />
      <link rel='canonical' href={url} />
      <meta property='og:url' content={url} />
      <meta property='og:site_name' content={siteTitle} />
      <meta property='og:type' content={siteType} />
      <meta property='og:locale' content={siteLocale} />
      <link rel='icon' href={siteIcon} />
      <link rel='apple-touch-icon' href={appleTouchIcon} />
      <meta property='og:image' content={imgUrl} />
      <meta property='og:image:width' content={siteImg.width.toString()} />
      <meta property='og:image:height' content={siteImg.height.toString()} />
      <meta name='twitter:card' content='summary_large_image' />
      <meta name='google-site-verification' content='NNNsuX41_1FbiLGiscTOFlclVFO3CYMPXODEQW-BQ_E' />
    </Head>
  )
}

export default Meta
