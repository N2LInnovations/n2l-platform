import { groq } from 'next-sanity'

export const tickerPostsQuery = groq`
*[_type == "tickerPost"] | order(publishedAt desc) {
  author,
  bodyEn,
  bodyFr,
}
`
