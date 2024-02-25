import React from 'react';
import { client } from '../lib/sanity';
import { simplifiedProduct } from '../interface';
import Image from 'next/image';
import Link from 'next/link';

async function getData() {
  const query = `
    *[_type == "product"] {
      _id,
      price,
      name,
      "slug": slug.current,
      "categoryName": category->name,
      "imageUrl": images[0].asset->url
    }
  `;
  const data = await client.fetch(query);
  return data || [];
}

const AllProducts = async () => {
  const data: simplifiedProduct[] = await getData();
  return (
    <div>
      <h1 className="text-3xl font-bold text-center mb-4">All Products</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {data.map((product) => (
          <div key={product._id} className="bg-white rounded-lg shadow-md p-4">
            <Image
              src={product.imageUrl}
              alt={`Image of ${product.name}`}
              width={300}
              height={300}
              className="object-cover rounded-lg mb-4"
            />
            <h2 className="text-xl font-semibold">{product.name}</h2>
            <p className="text-gray-600">₦{product.price}/item</p>
            <p className="text-gray-600">Category: {product.categoryName}</p>
            <Link href={`/product/${product.slug}`} className="text-grey-500">
              View Product
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AllProducts;
