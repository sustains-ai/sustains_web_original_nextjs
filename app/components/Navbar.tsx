'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 w-full bg-white shadow-md z-50">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        {/* Logo */}
        <Link href="/">
          <Image
            src="/images/Sustains_b1.png"
            alt="Sustains.ai Logo"
            width={120}
            height={40}
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
          className={`${
            isOpen ? 'block' : 'hidden'
          } lg:flex lg:items-center lg:space-x-6 w-full lg:w-auto absolute lg:static top-16 left-0 px-4 lg:px-0 py-4 lg:py-0`}
        >
          <Link href="/" className="text-gray-800 hover:text-primary px-3 py-2 transition-colors">Home</Link>
          <Link href="/about" className="text-gray-800 hover:text-primary px-3 py-2 transition-colors">About</Link>
          <Link href="/thoughts" className="text-gray-800 hover:text-primary px-3 py-2 transition-colors">Thoughts</Link>
          <Link href="/contact" className="text-gray-800 hover:text-primary px-3 py-2 transition-colors">Contact</Link>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
