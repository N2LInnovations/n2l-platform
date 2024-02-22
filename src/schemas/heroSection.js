import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'heroSection',
  title: 'Hero Section',
  type: 'document',
  fields: [
    defineField({
      name: 'captionOneEn',
      title: 'Caption One English',
      type: 'string',
    }),
    defineField({
      name: 'captionOneFr',
      title: 'Caption One French',
      type: 'string',
    }),
    defineField({
      name: 'captionTwoEn',
      title: 'Caption Two English',
      type: 'string',
    }),
    defineField({
      name: 'captionTwoFr',
      title: 'Caption Two French',
      type: 'string',
    }),
  ],

  preview: {
    select: {
      title: 'captionOneEn',
    },
    prepare(selection) {
      return { ...selection }
    },
  },
})
