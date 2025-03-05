"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

const SidebarLink = () => {
  const pathname = usePathname(); // Get current path

  return (
      <ul className="space-y-2">
        <li>
          <Link
              href="/vertical/introduction"
              className={`flex w-full rounded-sm px-3 py-2 text-base ${
                  pathname === "/vertical/introduction"
                      ? "bg-primary text-white font-semibold"
                      : "text-black dark:text-white hover:bg-gray-200 dark:hover:bg-gray-800"
              }`}
          >
            Introduction
          </Link>
        </li>

        <li>
          <Link
              href="/vertical/about"
              className={`flex w-full rounded-sm px-3 py-2 text-base ${
                  pathname === "/vertical/about"
                      ? "bg-primary text-white font-semibold"
                      : "text-black dark:text-white hover:bg-gray-200 dark:hover:bg-gray-800"
              }`}
          >
            About
          </Link>
        </li>

        <li>
          <Link
              href="/vertical/products-guide"
              className={`flex w-full rounded-sm px-3 py-2 text-base ${
                  pathname === "/vertical/products-guide"
                      ? "bg-primary text-white font-semibold"
                      : "text-black dark:text-white hover:bg-gray-200 dark:hover:bg-gray-800"
              }`}
          >
            Products Guide
          </Link>
        </li>
      </ul>
  );
};

export default SidebarLink;
