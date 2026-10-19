import type { MetadataRoute } from 'next'
import { projects } from '@/lib/site'

const baseUrl = 'https://divinejude.com'

export default function sitemap(): MetadataRoute.Sitemap {
  const pages = [
    { path: '', priority: 1 },
    { path: '/work', priority: 0.9 },
    { path: '/about', priority: 0.8 },
    { path: '/contact', priority: 0.7 },
    ...projects.map((project) => ({ path: project.href, priority: 0.8 })),
  ]

  return pages.map(({ path, priority }) => ({
    url: `${baseUrl}${path}`,
    changeFrequency: 'monthly',
    priority,
  }))
}
