"use client"
import Image from "next/image";
import { Key, useState } from "react";
import { urlFor } from "../lib/sanity";

interface iAppProps {
  images: any;
}
const ImageGallery = ({ images }: iAppProps) => {
  const [bigImage, setBigImage] = useState(images[0]);
  const handleSmallImageClick = (image: any) => {
    setBigImage(image)
  }
  return (
    <div className="grid gap-4 lg:grid-cols-5">
      <div className="order-last flex gap-4 lg:order-none lg:flex-col">
        {images.map((image: any, id: Key | null | undefined | any) => (
          <div key={id} className="overfow-hidden rounded-lg bg-gray-100">
            <Image
              src={urlFor(image).url()}
              width={200}
              height={200}
              alt="image"
              className="w-full h-full object-cover object-center cursor-pointer "
              priority
              onClick={() => handleSmallImageClick(image)}
            />
          </div>
        ))}
      </div>
      <div className="relative overflow-hidden rounded-lg bg-gray-100 lg:col-span-4 ">
        <Image
          src={urlFor(bigImage).url()}
          width={500}
          height={500}
          alt="Image"
          className="w-full h-full object-cover object-center cursor-pointer"
        />
        <span className="absolute left-0 top-0 rounded-br-lg bg-red-500 px-3 py-1.5 text-sm uppercase tracking-wider text-white">
          Sale
        </span>
      </div>
      
    </div>
  );
};

export default ImageGallery;
