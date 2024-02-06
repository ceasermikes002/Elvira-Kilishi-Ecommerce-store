import Image from "next/image"
import { Key } from "react"
import { urlFor } from "../lib/sanity"

interface iAppProps {
    images: any
}
const ImageGallery = ({images}:iAppProps) => {
  return (
        <div className="grid gap-4 lg:grid-cols-5">
        <div className="order-last flex gap-4 lg:order-none lg:flex-col">
            {images.map((image: any,id: Key | null | undefined | any)=>(
                <div key={id} className="overfow-hidden rounded-lg bg-gray-100">
                    <Image src={urlFor(image).url()} width={200} height={200} alt="image" className="w-full h-full object-cover object-center cursor-pointer " priority/>
                </div>
            ))}
        </div>
        </div>
  )
}

export default ImageGallery
