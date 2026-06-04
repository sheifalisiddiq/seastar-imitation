import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'product',
  title: 'Product',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Product Name',
      type: 'string',
      validation: Rule => Rule.required(),
    }),
    defineField({
      name: 'slug',
      title: 'Slug (URL)',
      type: 'slug',
      options: { source: 'name', maxLength: 96 },
      validation: Rule => Rule.required(),
    }),
    defineField({
      name: 'featured',
      title: 'Show on Home Page',
      type: 'boolean',
      initialValue: false,
    }),
    defineField({
      name: 'category',
      title: 'Category (display)',
      type: 'string',
      description: 'e.g. Gold Plated, Oxidised, Antique',
      validation: Rule => Rule.required(),
    }),
    defineField({
      name: 'cat',
      title: 'Category Key',
      type: 'string',
      description: 'Short key used for filtering — e.g. gold, oxidised, antique',
      validation: Rule => Rule.required(),
    }),
    defineField({
      name: 'price',
      title: 'Price (₹)',
      type: 'number',
      validation: Rule => Rule.required().positive(),
    }),
    defineField({
      name: 'oldPrice',
      title: 'Original Price / Strike-through (₹)',
      type: 'number',
      description: 'Leave empty if no discount',
    }),
    defineField({
      name: 'image',
      title: 'Main Product Image',
      type: 'image',
      options: { hotspot: true },
      validation: Rule => Rule.required(),
    }),
    defineField({
      name: 'hoverImage',
      title: 'Hover Image (shown on mouse-over)',
      type: 'image',
      options: { hotspot: true },
    }),
    defineField({
      name: 'images',
      title: 'Gallery Images (shown on product page)',
      type: 'array',
      of: [{ type: 'image', options: { hotspot: true } }],
    }),
    defineField({
      name: 'badge',
      title: 'Badge Text',
      type: 'string',
      description: 'e.g. New In, Bestseller, Limited Edition',
    }),
    defineField({
      name: 'badgeVariant',
      title: 'Badge Colour',
      type: 'string',
      options: {
        list: [
          { title: 'Gold (default)', value: 'default' },
          { title: 'Burgundy/Red', value: 'burgundy' },
        ],
        layout: 'radio',
      },
    }),
    defineField({
      name: 'description',
      title: 'Product Description',
      type: 'text',
      rows: 4,
    }),
    defineField({
      name: 'details',
      title: 'Product Details',
      description: 'Material, Finish, Weight, Care instructions, etc.',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            { name: 'label', title: 'Label', type: 'string' },
            { name: 'value', title: 'Value', type: 'string' },
          ],
          preview: {
            select: { title: 'label', subtitle: 'value' },
          },
        },
      ],
    }),
    defineField({
      name: 'stock',
      title: 'Stock Quantity',
      type: 'number',
      initialValue: 0,
    }),
    defineField({
      name: 'rating',
      title: 'Rating (1–5)',
      type: 'number',
      validation: Rule => Rule.min(1).max(5),
    }),
    defineField({
      name: 'reviewCount',
      title: 'Number of Reviews',
      type: 'number',
    }),
  ],
  preview: {
    select: {
      title: 'name',
      subtitle: 'category',
      media: 'image',
    },
  },
})
