"use client";
import Link from "next/link";

const SidebarLink = () => {
  return (
    <>
      <li className="block">
        <Link
          href={""}
          className={`flex w-full rounded-sm bg-stroke px-3 py-2 text-base text-black dark:bg-blackho dark:text-white`}
        >
          Introduction
        </Link>
        <Link
          href={""}
          className={`flex w-full rounded-sm px-3 py-2 text-base text-black dark:text-white `}
        >
          About
        </Link>
        <Link
          href={""}
          className={`flex w-full rounded-sm px-3 py-2 text-base text-black dark:text-white `}
        >
          Products Guide
        </Link>

      </li>
    </>
  );
};

export default SidebarLink;
