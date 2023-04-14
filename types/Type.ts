import { StaticImageData } from 'next/image'
import { ReactNode } from 'react'

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

type HobbyListContent = {
  src: StaticImageData
  title: string
  desc: string
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

type BarContent = {
  title: string
  src: string
  dataPer: number
}

type ButtonContent = {
  url: string
  local?: boolean
  btnText?: string
}

type DefinitionListContent = {
  title: string
  desc: string | string[]
  ja?: boolean
}

type ContainerContent = {
  title: string
  children: ReactNode
}

type WorksBodyContent = {
  title: string
  tools: string
  time: string
  desc: string | string[]
  url: string
}

type LayoutContent = {
  children: ReactNode
}

type PaginationContent = {
  prevText: string
  nextText: string
  prevUrl: string
  nextUrl: string
}

export type {
  allWorksContent,
  HeroProps,
  allSlugsContent,
  PostContent,
  BarContent,
  ButtonContent,
  ContainerContent,
  DefinitionListContent,
  WorksBodyContent,
  HobbyListContent,
  LayoutContent,
  PaginationContent
}
