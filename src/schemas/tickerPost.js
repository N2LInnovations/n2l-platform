import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'tickerPost',
  title: 'Ticker Post',
  type: 'document',
  fields: [
    defineField({
      name: 'author',
      title: 'Author',
      type: 'string',
    }),
    defineField({
      name: 'bodyEn',
      title: 'Body English',
      type: 'string',
    }),
    defineField({
      name: 'bodyFr',
      title: 'Body French',
      type: 'string',
    }),
  ],

  preview: {
    select: {
      title: 'bodyEn',
      author: 'author',
    },
    prepare(selection) {
      return { ...selection }
    },
  },
})
