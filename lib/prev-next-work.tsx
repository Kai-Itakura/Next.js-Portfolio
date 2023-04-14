import { allSlugsContent } from '@/types/Type'

export const prevNextWork = (allSlugs: allSlugsContent[], currentSlug: string) => {
  const numberOfWork = allSlugs.length

  const index = allSlugs.findIndex(({ slug }) => slug === currentSlug)

  const prevWork = index + 1 === numberOfWork ? { title: '', slug: '' } : allSlugs[index + 1]

  const nextWork = index === 0 ? { title: '', slug: '' } : allSlugs[index - 1]

  return [prevWork, nextWork]
}
