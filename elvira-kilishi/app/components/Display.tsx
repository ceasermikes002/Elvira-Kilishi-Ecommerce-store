"use client";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { HeartIcon, Truck } from "lucide-react";
import React from "react";
import ImageGallery from "./ImageGallery";
import { fullProduct } from "../interface";
import toast from "react-hot-toast";

interface DisplayProps {
  data: fullProduct;
}

const Display: React.FC<DisplayProps> = ({ data }) => {
  const [isLiked, setIsLiked] = useState(() => {
    const likedProducts = JSON.parse(
      localStorage.getItem("likedProducts") || "[]"
    );
    return likedProducts.some(
      (product: fullProduct) => product._id === data._id
    );
  });

  const [quantity, setQuantity] = useState(1); // State for quantity counter

  let lastToastTime = 0;

  const handleLikeProduct = () => {
    setIsLiked((prevIsLiked: any) => {
      const newIsLiked = !prevIsLiked;

      const likedProducts =
        JSON.parse(localStorage.getItem("likedProducts") as string) || [];

      if (newIsLiked) {
        likedProducts.push(data);
        localStorage.setItem("likedProducts", JSON.stringify(likedProducts));
        showToast("Product liked successfully");
      } else {
        const updatedLikedProducts = likedProducts.filter(
          (product: { _id: string }) => product._id !== data._id
        );
        localStorage.setItem(
          "likedProducts",
          JSON.stringify(updatedLikedProducts)
        );
        showToast("Product unliked successfully");
      }

      return newIsLiked;
    });
  };

  const showToast = (message: string) => {
    const now = Date.now();
    if (now - lastToastTime > 2000) {
      toast.success(message);
      lastToastTime = now;
    }
  };

  const handleAddToCart = (data: fullProduct) => {
    if (window.localStorage.getItem("cart")) {
      let products = [];
      const getData = JSON.parse(localStorage.getItem("cart") || "");

      if (
        getData.filter((product: fullProduct) => product._id === data._id)
          .length > 0
      ) {
        toast.error("Product already in cart!");
      } else {
        products = [...getData, data];
        localStorage.setItem("cart", JSON.stringify(products));
        toast.success("Added to cart!");
      }
    } else {
      const newData = [data];
      localStorage.setItem("cart", JSON.stringify(newData));
    }
  };

  const incrementQuantity = () => {
    setQuantity((prevQuantity) => prevQuantity + 1);
  };

  const decrementQuantity = () => {
    if (quantity > 1) {
      setQuantity((prevQuantity) => prevQuantity - 1);
    }
  };

  return (
    <>
      <div className="bg-white">
        <div className="mx-auto max-w-screen-xl px-4 md:px-8">
          <div className="grid gap-8 md:grid-cols-2">
            <ImageGallery images={data.images} />

            <div className="md:py-8">
              <div className="mb-2 md:mb-3">
                <span className="mb-0.5 inline-block text-gray-500">
                  {data.categoryName}
                </span>
                <h2 className="text-2xl font-bold text-gray-800 lg:text-3xl ">
                  {data.name}
                </h2>
              </div>
              <div className="mb-6 flex items-center gap-3 md:mb-10">
                <Button
                  className="rounded-full gap-x-2 bg-none"
                  onClick={() => handleLikeProduct()}
                >
                  {isLiked ? (
                    <HeartIcon className="h-5 w-5" fill="red" />
                  ) : (
                    <HeartIcon className="h-5 w-5" />
                  )}
                </Button>
                {isLiked ? (
                  <span className="text-sm text-gray-500 transition duration-100">
                    Unlike Product
                  </span>
                ) : (
                  <span className="text-sm text-gray-500 transition duration-100">
                    Like Product
                  </span>
                )}
              </div>

              <div className="mb-4">
                <div className="flex items-end gap-2">
                  <span className="text-xl font-bold md:text-2xl text-gray-800">
                    ₦{data.price}
                  </span>
                  <span className="mb-0.5 text-red-500 line-through">
                    ₦{data.price + 50}
                  </span>
                </div>
                <span className="text-sm text-gray-500">
                  Includes VAT plus shipping.
                </span>
              </div>
              <div className="mb-6 flex items-center gap-2 text-gray-500">
                <Truck className="w-6 h-6" />
                <span className="text-sm">1-2 day(s) shipping.</span>
              </div>

              <div className="flex items-center gap-2.5">
                <div className="flex items-center">
                  <Button onClick={decrementQuantity}>-</Button>
                  <span className="mx-2">{quantity}</span>
                  <Button onClick={incrementQuantity}>+</Button>
                </div>
                <Button onClick={() => handleAddToCart({ ...data, quantity })}>
                  Add to cart
                </Button>
              </div>

              <p className="mt-8 text-gray-600 text-base tracking-wider">
                {data.description}
              </p>
              <p className="text-[13px] mt-10 text-gray-900">
                <span className="font-semibold">Product Id:</span> {data._id}
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Display;
