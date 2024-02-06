import Image from "next/image";
import { client, urlFor } from "../lib/sanity";
import Link from "next/link";

async function getData() {
  const query = "*[_type == 'heroImage'][0]";
  const data = await client.fetch(query);
  return data;
}

export default async function Hero() {
  const data = await getData();
  return (
    <section className="mx-auto max-w-2xl px-4 sm:pb-6 lg:max-w-7xl lg:px-8">
      <div className="mb-8 flex flex-wrap justify-between md:mb-16">
        <div className="mb-6 flex w-full flex-col justify-center sm:mb-12 mg:mb-0 lg:w-1/3 lg:pb-24 lg:pt-48">
          <h1 className="mb-4 text-4xl font-bold text-black sm:text-5xl md:mb-8 md:text-6xl">
            Excellent Kilishi for an excellent price.
          </h1>
          <p className="max-w-md leading-relaxed text-gray-500 xl:text-lg">
            We sell only the best kilishis at unbeatable prices.✨ <br />
            What are you waiting for...👀 come and shop with us now!!
          </p>
        </div>

        {/* IMAGE DIV */}
        <div className="mb-12 flex w-full md:mb-16 lg:w-2/3">
          <div className="relative left-12 top-12 z-10 ml-12 overflow-hidden rounded-lg bg-gray-100 shadow-lg md:left-16 md:top-16 lg:ml-0 transform transition-transform hover:scale-105">
            <Image
              src={urlFor(data.image1).url()}
              alt=""
              className="h-full w-full object-cover object-center"
              width={300}
              height={300}
              priority
            />
          </div>

          <div className="overflow-hidden rounded-lg bg-gray-100 shadow-lg transform transition-transform hover:scale-105">
            <Image
              src={urlFor(data.image2).url()}
              alt="Image"
              className="h-full w-full object-cover object-center"
              width={300}
              height={300}
              priority
            />
          </div>
        </div>
      </div>

        <div className="flex flex-col items-center justify-between gap-8 md:flex-row my-10">
            <div className="flex h-12 w-64 divide-x overflow-hidden rounded-lg border">
                <Link href={'/small'} className="flex w-1/3 items-center justify-center text-gray-500 transition duration-100 hover:bg-gray-100 active:bg-gray-20">
                    Small
                </Link>

                <Link href={'/medium'} className="flex w-1/3 items-center justify-center text-gray-500 transition duration-100 hover:bg-gray-100 active:bg-gray-20">
                    Medium
                </Link>

                <Link href={'/large'} className="flex w-1/3 items-center justify-center text-gray-500 transition duration-100 hover:bg-gray-100 active:bg-gray-20">
                    Large
                </Link>
            </div>
        </div>
    </section>
  );
}
