"use client";
import React, { useState, useEffect } from "react";
import { Toaster, toast } from "react-hot-toast";
import Link from "next/link";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";
import { fullProduct } from "../interface";
import { PaystackButton } from "react-paystack";
import { ShoppingCartIcon } from "lucide-react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { headerContext } from "../global/Context";
import { useContext } from "react";
import { Input } from "@/components/ui/input";
const ShoppingCartModal = () => {
  const { show, setShow } = useContext(headerContext);
  const [name, setName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");

  const savedCart = localStorage.getItem("cart");
  const initialProducts = savedCart ? JSON.parse(savedCart) : [];
  const publicKey =
    (process.env.PAYSTACK_TEST_PUBLIC_KEY as string) ||
    "pk_test_2924cf0f06bad5a9b92fb623a0cd9a61573b319d";

  const [products, setProducts] = useState(initialProducts);
  const [totalPrice, setTotalPrice] = useState(0);
  const [email, setEmail] = useState("");
  // Function to handle the closing of the modal
  const handleCloseModal = () => {
    // You can add any necessary cleanup or actions here
    // For example, resetting the email input
    setEmail("");
  };
  // useEffect to handle modal closing when show state changes
  useEffect(() => {
    if (!show) {
      handleCloseModal();
    }
  }, [show]);
  // REMOVE FROM CART
  const handleRemoveFromCart = (productId: string) => {
    // Filter out the product to be removed
    const updatedProducts = products.filter(
      (product: fullProduct) => product._id !== productId
    );
    // Update state with the filtered products
    setProducts(updatedProducts);

    if (2 == 2) {
      // Update local storage with the filtered products
      localStorage.setItem("cart", JSON.stringify(updatedProducts));
      toast.success("Product removed from cart!");
    } else {
      toast.error("Error removing product from cart!");
    }
  };

  // Function to generate a random reference
  const generateRandomReference = () => {
    const characters =
      "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    let result = "SHOP-";
    for (let i = 0; i < 20; i++) {
      result += characters.charAt(
        Math.floor(Math.random() * characters.length)
      );
    }
    return result;
  };

  // Calculate total price when products change
  useEffect(() => {
    const calculateTotalPrice = () => {
      let total = 0;
      products.forEach((product: fullProduct) => {
        total += product.price * product.quantity;
      });
      return total;
    };

    setTotalPrice(calculateTotalPrice());
  }, [products]);

  // Paystack button props
const handlePayment = {
  email: email,
  name:name,
  phoneNumber:phoneNumber,
  amount: totalPrice * 100, // Convert to kobo
  reference: generateRandomReference(), // Generate a random reference
  publicKey,
  text: "Pay Now",
  onSuccess: () => {
    toast.success("Thanks for doing business with us! Come back soon!!");
  },
  onClose: () => {
    toast.error("Please try again soon :(");
  },
};


  const handleContinueShopping = () => {
    setShow(false) 
  };

  return (
    <Sheet open={show} onOpenChange={setShow}>
      <SheetContent className="sm:max-w-lg w-[90vw]">
        <SheetHeader>
          <SheetTitle className="flex gap-3">
            Shopping Cart <ShoppingCartIcon />
          </SheetTitle>
        </SheetHeader>
        <>
          <div className="h-full flex flex-col justify-between">
            <Input
              type="email"
              className="p-4 border border-gray-900 animate-pulse font-serif mb-5"
              required
              placeholder="Enter your valid email address to complete payment."
              value={email}
              onChange={(e) => setEmail(e.target.value)} // Update email state on change
            />
            <Input
              type="text"
              className="p-4 border border-gray-900 animate-pulse font-serif mb-5"
              required
              placeholder="Enter your name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <Input
              type="tel"
              className="p-4 border border-gray-900 animate-pulse font-serif mb-5"
              required
              placeholder="Enter your phone number"
              value={phoneNumber}
              onChange={(e) => setPhoneNumber(e.target.value)}
            />
            <div className=" flex overflow-y-auto">
              <ul className="my-6 divide-y divide-gray-200 pb-7">
                {products.length > 0 ? (
                  products.map((product: fullProduct) => (
                    <li key={product._id} className="mb-4">
                      <p>
                        <span className="font-semibold">Product Name:</span>{" "}
                        <span className="ml-2">{product.name}</span>
                      </p>
                      <p>
                        <span className="font-semibold">
                          NO. of Products Ordered:
                        </span>{" "}
                        <span className="ml-2">
                          {product.quantity}&nbsp;Pieces.
                        </span>
                      </p>
                      <p>
                        <span className="font-semibold">Total Price:</span>{" "}
                        <span className="ml-2">
                          ₦{product.price * product.quantity}
                        </span>
                      </p>
                      <Button
                        onClick={() => handleRemoveFromCart(product._id)}
                        className="mt-5"
                        variant={"destructive"}
                      >
                        Remove
                      </Button>
                    </li>
                  ))
                ) : (
                  <li>No product yet!</li>
                )}
              </ul>
            </div>
            <div>
              <p className="font-semibold">Total Price: ₦{totalPrice}</p>

              <br />
              <br />

              <div className="flex gap-4 mb-5">
                <Button className="bg-green-500 hover:bg-green-500">
                  <PaystackButton {...handlePayment} />
                </Button>
                <Button onClick={() => handleContinueShopping()}>
                  Continue Shopping
                </Button>
              </div>
            </div>
          </div>
        </>
      </SheetContent>
      <Toaster position="top-center" />
    </Sheet>
  );
};

export default ShoppingCartModal;
