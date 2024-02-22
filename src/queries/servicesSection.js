import { groq } from 'next-sanity'

export const servicesSectionQuery = groq`
*[_type == "servicesSection"] | order(publishedAt desc) {
    captionOneEn,
    captionOneFr,
    captionTwoEn,
    captionTwoFr,
}
`
