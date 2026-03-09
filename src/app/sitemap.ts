import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: 'https://vigneshfurniture.in', lastModified: new Date(), priority: 1 },
    { url: 'https://vigneshfurniture.in/catalog', lastModified: new Date(), priority: 0.8 },
  ]
}
