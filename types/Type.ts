type allWorksContent = {
  title: string
  slug: string
  topImage: {
    blurDataURL: string
    url: string
    height: number
    width: number
  }
}

type HeroProps = {
  title: string
  subtitle?: string | boolean
  backGround?: string
}

export type { allWorksContent, HeroProps }
