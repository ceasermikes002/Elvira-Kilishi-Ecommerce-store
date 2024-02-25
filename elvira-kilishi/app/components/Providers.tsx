// "use client";
// import React, { ReactNode } from "react";
// import { CartProvider  } from "use-shopping-cart";
// import { loadStripe } from "@stripe/stripe-js";

// const stripePromise = loadStripe(
//   process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY!
// );

// const Cart = ({ children }: { children: ReactNode }) => (
//   <CartProvider
//     cartMode="client-only"
//     mode="payment"
//     stripe={process.env.NEXT_PUBLIC_STRIPE_KEY as string}
//     currency="USD"
//     shouldPersist={false}
//     billingAddressCollection={true}
//     successUrl="http://localhost:3000/success"
//     cancelUrl="http://localhost:3000/cancel"
//     language="en-US"
//   >
//     <>{children}</>
//   </CartProvider>
// );

// export default Cart;
