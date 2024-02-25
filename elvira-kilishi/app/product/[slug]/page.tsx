import Display from "@/app/components/Display";
import ImageGallery from "@/app/components/ImageGallery";
import { fullProduct } from "@/app/interface";
import { client } from "@/app/lib/sanity";
import { Button } from "@/components/ui/button";
import { Star, Truck } from "lucide-react";
import React from "react";
async function getData(slug: string) {
  const query = `*[_type == "product" && slug.current == "${slug}"][0] {
    _id,
      price,
      name,
      "slug":slug.current,
      "categoryName":category -> name,
      images,
      description,
  }`;
  const data = await client.fetch(query);
  return data;
}

export const dynamic = 'force-dynamic'; // This makes sure that the component is re-rendered when props change


const page = async ({ params }: { params: { slug: string } }) => {
  const data: fullProduct = await getData(params.slug);

  return (
    <Display data={data} />
  );
};

export default page;