import { defineType } from 'sanity'

export default defineType({
  name: 'project',
  title: 'Project',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      description: 'Title of the project',
      type: 'string'
    },
    {
      name: 'date',
      title: 'Date',
      type: 'date'
    },
    {
      name: 'isMobile',
      title: 'Is Mobile',
      type: 'boolean',
    },
    {
      name: 'image',
      title: 'Image',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
    {
      name: 'summary',
      title: 'Summary',
      type: 'text',
    },
    {
      name: 'technologies',
      title: 'Technologies',
      type: 'array',
      of: [{ type: 'reference', to: { type: 'skill' } }]
    },
    {
      name: 'linkToBuildApple',
      title: 'linkToBuildApple',
      type: 'url',
    },
    {
      name: 'linkToBuildPlayStore',
      title: 'linkToBuildPlayStore',
      type: 'url',
    },
    {
      name: 'linkToBuild',
      title: 'LinkToBuild',
      type: 'url',
    },
    {
      name: 'order',
      title: 'Ordem',
      type: 'number',
    },
  ],
})
