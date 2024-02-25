import type { Metadata } from "next";
import { Alegreya_SC} from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import ShoppingCartModal from "./components/ShoppingCartModal";
import { ClerkProvider } from "@clerk/nextjs";
import { CartProvider } from "use-shopping-cart";
import FooterComponent from "./components/Footer";
import Header from "./components/Header";
const algreya = Alegreya_SC({
  subsets: ["latin"],
  weight: "400"
});

export const metadata: Metadata = {
  title: "Elvira's Kilishi",
  description: "Shop here for the best kilishi.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className={algreya.className}>
            <Header/>
             {/* <Navbar /> */}
            {children}
            <FooterComponent/>
        </body>
      </html>
    </ClerkProvider>
  );
}
