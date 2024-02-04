// schemas/pet.js
export default {
    name: 'product',
    type: 'document',
    title: 'Product',
    fields: [
      {
        name: 'name',
        type: 'string',
        title: 'Name of Product'
      },
      {
        name: 'images',
        type: 'array',
        title: 'Images for Products',
        of:[{type: 'image'}]
      },
      {
        name: 'description',
        type: 'text',
        title: 'Product description'
      },
      {
        name: 'slug',
        type: 'slug',
        title: 'Product Slug',
        options: {
          source: 'name'
        }
      },
      {
        name: 'price',
        type: 'number',
        title: 'Price'
      },
      {
        name: 'category',
        title: 'Product Category',
        type: 'reference',
        to: [
          {type: 'category'},
        ]
      }
    ]
  }