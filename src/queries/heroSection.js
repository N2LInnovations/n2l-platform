import { groq } from 'next-sanity'

export const heroSectionQuery = groq`
*[_type == "heroSection"] | order(publishedAt desc) {
    captionOneEn,
    captionOneFr,
    captionTwoEn,
    captionTwoFr,
}
`
