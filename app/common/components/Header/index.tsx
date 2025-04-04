'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import menuData from './menuData';
import { useDispatch, useSelector } from 'react-redux';
import { LogOut, Menu, X, User } from "lucide-react";
import { logoutAction } from '../auth/redux/actions';

const getInitials = (fullName: string) => {
  const nameParts = fullName.trim().split(" ");
  if (nameParts.length === 1) return nameParts[0][0].toUpperCase();
  return (nameParts[0][0] + nameParts[nameParts.length - 1][0]).toUpperCase();
};

const Profile = () => {
  const isLoggedIn = useSelector((state: any) => state.login.isLoggedIn)
  const user = useSelector((state: any) => state.login.user)
  const [showDropdown, setShowDropdown] = useState(false);

  const dropdownRef = React.useRef<any>(null);
  const dispatch = useDispatch()

  // Close dropdown when clicking outside
  React.useEffect(() => {
    const handleClickOutside = (event: any) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setShowDropdown(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="relative">
      {isLoggedIn ? (
        <div className="flex items-center space-x-4">
          <button
            className="flex items-center justify-center w-10 h-10 bg-primary text-white font-bold rounded-full"
            onClick={() => setShowDropdown(!showDropdown)}
          >
            {getInitials(user.name)}
          </button>

          {showDropdown && (
            <div
              ref={dropdownRef}
              className="absolute z-[10] right-0 top-10 bg-white border rounded-lg shadow-lg"
            >
              <div className="px-4 py-2 text-gray-700 border-b">{user.name}</div>
              <div className="px-4 py-2 text-gray-700 border-b">{user.email}</div>
              <button
                className="flex items-center w-full px-4 py-2 text-red-600 hover:bg-gray-100 rounded-b-lg"
                onClick={() => {
                  setShowDropdown(false)
                  dispatch(logoutAction())
                }}
              >
                <LogOut className="w-4 h-4 mr-2" />
                Logout
              </button>
            </div>
          )}
        </div>
      ) : (
        <div className="hidden lg:flex items-center space-x-4">
          <Link href="/signup">
            <button className="text-gray-600 font-semibold border border-gray-400 px-4 py-2 rounded-md hover:bg-gray-100 transition">
              Sign Up
            </button>
          </Link>
          <Link href="/signin">
            <button className="bg-primary text-white font-semibold px-4 py-2 rounded-md transition">
              Sign In
            </button>
          </Link>
        </div>
      )}
    </div>
  )
}

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const pathUrl = usePathname();

  return (
    <header className="fixed top-0 left-0 w-full bg-white shadow-md z-[999]">
      <div className="container mx-auto flex items-center">
        {/* Logo */}
        <Link href="/">
          <Image
            src="/images/Sustains_b1.png"
            alt="Sustains.ai Logo"
            width={75}
            height={30}
          />
        </Link>
        <div className="flex flex-1 items-center justify-end">
          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-3 text-gray-700 focus:outline-none"
            onClick={() => setIsOpen(!isOpen)}
          >
            <Menu size={24} />
          </button>

          {
            isOpen && 
            <div className='absolute z-[2] right-5 top-2 p-3'>
              <X onClick={() => setIsOpen(false)} size={24} />
            </div>
          }

          {/* Navigation Links */}
          <nav
            className={`${isOpen ? 'flex' : 'hidden md:flex'
              } flex-col md:flex-row items-center md:justify-end bg-white shadow-2xl md:shadow-none w-full z-[1] absolute md:relative top-0 left-0 md:top-0 px-4 lg:px-0 py-4 md:py-0 md:gap-5`}
          >
            {
              menuData.map((item) => {
                return (
                  <Link
                    key={item.id}
                    href={item.path}
                    onClick={() => setIsOpen(false)}
                    className={`text-gray-500 hover:text-primary px-3 py-2 transition-colors font-semibold ${pathUrl === item.path ? "text-primary bg-green-100 rounded-md" : ""
                      }`}
                  >{item.title}</Link>
                )
              })
            }
          </nav>
          <div className='flex justify-end bg-green'>
            <Profile />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;