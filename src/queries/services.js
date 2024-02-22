import { groq } from 'next-sanity'

export const servicesQuery = groq`
*[_type == "services"] {
    order,
    titleEn,
    titleFr,
    descriptionEn,
    descriptionFr,
    icon,
    fullDescriptionTitleEn,
    fullDescriptionTitleFr,
    fullDescriptionEn,
    fullDescriptionFr,
}
`
