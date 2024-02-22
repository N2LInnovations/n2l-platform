import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'services',
  title: 'Services',
  type: 'document',
  fields: [
    defineField({
      name: 'order',
      title: 'Order',
      type: 'number',
    }),
    defineField({
      name: 'titleEn',
      title: 'Title English',
      type: 'string',
    }),
    defineField({
      name: 'titleFr',
      title: 'Title French',
      type: 'string',
    }),
    defineField({
      name: 'descriptionEn',
      title: 'Description English',
      type: 'string',
    }),
    defineField({
      name: 'descriptionFr',
      title: 'Description French',
      type: 'string',
    }),
    defineField({
      name: 'icon',
      title: 'Icon',
      type: 'string',
    }),
    defineField({
      name: 'fullDescriptionTitleEn',
      title: 'Full Description Title English',
      type: 'string',
    }),
    defineField({
      name: 'fullDescriptionTitleFr',
      title: 'Full Description Title French',
      type: 'string',
    }),
    defineField({
      name: 'fullDescriptionEn',
      title: 'Full Description English',
      type: 'blockContent',
    }),
    defineField({
      name: 'fullDescriptionFr',
      title: 'Full Description French',
      type: 'blockContent',
    }),
  ],

  preview: {
    select: {
      title: 'titleEn',
    },
    prepare(selection) {
      return { ...selection }
    },
  },
})
