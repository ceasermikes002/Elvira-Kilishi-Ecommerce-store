import React, { useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ShoppingCart } from 'lucide-react';
import { useContext } from 'react';
import { headerContext } from '../global/Context';
import { UserButton } from '@clerk/nextjs';

const links = [
  { name: 'Home', href: '/' },
  { name: 'Small', href: '/Small' },
  { name: 'Medium', href: '/Medium' },
  { name: 'Large', href: '/Large' },
  { name: 'Contact Us', href: '/contact' },
];

const Navbar = () => {
  const pathname = usePathname();
  const { show, setShow } = useContext(headerContext);
  const [cartCount, setCartCount] = useState(0);

  const showModal = () => {
    setShow(!show);
  };
var depArray=localStorage.getItem('cart')
  useEffect(() => {
    // Calculate the total number of products in the cart whenever the component is rendered
    const savedCart = localStorage.getItem('cart');
    const initialProducts = savedCart ? JSON.parse(savedCart) : [];
    const totalCount = initialProducts.length;
    setCartCount(totalCount);
  }, [depArray]);

  return (
    <header className="mb-8 border-b">
      <div className="flex items-center justify-between mx-auto max-w-2xl px-4 sm:px-6 lg:max-w-7xl">
        <div className="flex items-center">
          {/* Add your logo here */}
          <Image src="/Elvira-Kilishi-logo.jpg" alt="Logo" className="mr-2" width={100} height={40} />
          <Link href={'/'}>
            <h1 className="text-2xl md:text-4xl font-bold">
              Elvira&apos;s <span className="text-[#f2c460]">Kilishi</span>
            </h1>
          </Link>
        </div>
        <nav className="hidden lg:flex gap-12 items-center">
          {links.map((link, id) => (
            <div key={id}>
              {pathname === link.href ? (
                <Link href={link.href} className="text-lg font-semibold text-[#f2c460]">
                  {link.name}
                </Link>
              ) : (
                <Link href={link.href} className="text-lg font-semibold text-primary transition duration-100 hover:text-[#f2c460]">
                  {link.name}
                </Link>
              )}
            </div>
          ))}
        </nav>

        <div className="flex justify-center items-center divide-x border-r sm:border-l">
          <Button
            className="relative flex flex-col items-center justify-center gap-y-1.5 h-12 w-12 sm:h-20 sm:w-20 md:h-24 md:w-24"
            variant={'outline'}
            onClick={() => showModal()}
          >
            {/* Display the dynamic cart count */}
            {cartCount > 0 ? (
              <span className="absolute top-0 right-0 bg-red-500 text-white rounded-full w-6 h-6 flex items-center justify-center">
                {cartCount}
              </span>
            ) : (
              <span className="absolute top-0 right-0 bg-red-500 text-white rounded-full w-6 h-6 flex items-center justify-center">0</span>
            )}
            <ShoppingCart />
            <span className="hidden sm:inline text-xs font-semibold text-gray-500">Cart</span>
          </Button>
        </div>
        <div className="">
          <UserButton />
        </div>
      </div>
    </header>
  );
};

export default Navbar;
