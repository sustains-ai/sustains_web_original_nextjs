'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import menuData from './menuData';
import { Menu } from '@/types/menu';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const pathUrl = usePathname();

  return (
    <header className="fixed top-0 left-0 w-full bg-white shadow-md z-50">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <Link href="/">
          <Image
            src="/images/Sustains_b1.png"
            alt="Sustains.ai Logo"
            width={75}
            height={30}
          />
        </Link>

        {/* Mobile Menu Button */}
        <button
          className="lg:hidden p-2 text-gray-700 focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <span>&#10005;</span> : <span>&#9776;</span>}
        </button>

        {/* Navigation Links */}
        <nav
          className={`${isOpen ? 'block' : 'hidden'
            } lg:flex lg:items-center lg:space-x-6 w-full lg:w-auto absolute lg:static top-16 left-0 px-4 lg:px-0 py-4 lg:py-0`}
        >
          {
            menuData.map((item: Menu) => {
              return (
                <Link
                  key={item.id}
                  href={item.path}
                  className={`text-gray-500 hover:text-primary px-3 py-2 transition-colors font-semibold ${pathUrl === item.path ? "text-primary" : ""
                    }`}
                >{item.title}</Link>
              )
            })
          }
        </nav>
      </div>
    </header>
  );
};

export default Header;