import { defineType } from 'sanity'

export default defineType({
  name: 'experience',
  title: 'Experience',
  type: 'document',
  fields: [
    {
      name: 'companyName',
      title: 'Company Name',
      type: 'string',
    },
    {
      name: 'jobTitle',
      title: 'Job Title',
      type: 'string'
    },
    {
      name: 'companySite',
      title: 'Company Site',
      type: 'url',
    },

    {
      name: 'companyImage',
      title: 'Company Image',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
    {
      name: 'companyDescription',
      title: 'Company Description',
      type: 'text',
      options: { rows: 5 }
    },
    {
      name: 'dateStarted',
      title: 'DateStarted',
      type: 'date'
    },
    {
      name: 'dateEnded',
      title: 'DateEnded',
      type: 'date',
    },
    {
      name: 'isCurrentlyWorkingHere',
      title: 'IsCurrentlyWorkingHere',
      type: 'boolean'
    },
    {
      name: 'technologies',
      title: 'Technologies',
      type: 'array',
      of: [{ type: 'reference', to: { type: 'skill' } }]
    },
    {
      name: 'points',
      title: 'Points',
      type: 'array',
      of: [{ type: 'string' }]
    },
  ],
})
