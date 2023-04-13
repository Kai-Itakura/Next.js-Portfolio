type Image = {
  url: string
  height: number
  width: number
  blurDataURL: string
}

type PostContent = {
  title: string
  slug: string
  tools: string[]
  time: string
  description: string
  url: string
  mockUpImage: Image
  image1: Image
  image2: Image
  topImage: Image
  heroImage: Image
  lang: boolean
}

type allSlugsContent = {
  title: string
  slug: string
}

type allWorksContent = {
  title: string
  slug: string
  topImage: Image
}

type HeroProps = {
  title: string
  subtitle?: string | boolean
  backGround?: string
}

export type { allWorksContent, HeroProps, allSlugsContent, PostContent }
