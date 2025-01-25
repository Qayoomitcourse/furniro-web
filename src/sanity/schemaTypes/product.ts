// schemas/product.ts

import { SchemaTypeDefinition } from 'sanity'

export const product: SchemaTypeDefinition = {
  name: 'product',
  title: 'Product',
  type: 'document',
  fields: [
    {
      name: 'name',
      title: 'Product Name',
      type: 'string',
    },
    {
      name: 'description',
      title: 'Description',
      type: 'text',
    },
    {
      name: 'price',
      title: 'Price',
      type: 'number',
    },
    {
      name: 'discountPrice',
      title: 'Discount Price',
      type: 'number',
      validation: Rule => Rule.optional(),
    },
    {
      name: 'discount',
      title: 'Discount',
      type: 'string',
      validation: Rule => Rule.optional(),
    },
    {
      name: 'category',
      title: 'Category',
      type: 'string',
    },
    {
      name: 'size',
      title: 'Size',
      type: 'array',
      of: [{ type: 'string' }],
    },
    {
      name: 'colour',
      title: 'Colour',
      type: 'array',
      of: [{ type: 'string' }],
    },
    {
      name: 'quantity',
      title: 'Quantity',
      type: 'number',
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'name',
        maxLength: 96,
      },
    },
    {
      name: 'sku',
      title: 'SKU',
      type: 'string',
    },
    {
      name: 'tags',
      title: 'Tags',
      type: 'array',
      of: [{ type: 'string' }],
    },
    {
      name: 'shareOptions',
      title: 'Share Options',
      type: 'array',
      of: [{ type: 'string' }],
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
      name: 'isNew',
      title: 'Is New',
      type: 'boolean',
      validation: Rule => Rule.optional(),
    },
  ],
}