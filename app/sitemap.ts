import type { MetadataRoute } from 'next'

const baseUrl = 'https://divinejude.com'

const routes = [
  { path: '', priority: 1 },
  { path: '/work', priority: 0.9 },
  { path: '/case-study', priority: 0.8 },
  { path: '/case-study/windwire', priority: 0.8 },
  { path: '/case-study/ai-implementation', priority: 0.8 },
  { path: '/case-study/invoice-automation', priority: 0.8 },
  { path: '/case-study/transperfect', priority: 0.8 },
  { path: '/contact', priority: 0.7 },
]

export default function sitemap(): MetadataRoute.Sitemap {
  return routes.map(({ path, priority }) => ({
    url: `${baseUrl}${path}`,
    changeFrequency: 'monthly',
    priority,
  }))
}
