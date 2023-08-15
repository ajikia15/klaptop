"use client";
import { motion } from "framer-motion";
import { usePathname } from "next/navigation";
import Link from "next/link";
export default function Favourites() {
  const pathname = usePathname();
  return (
    <Link
      href="/user/favourites"
      className="grid rounded-full place-items-center h-[90%] aspect-square text-third hover:text-text transition-colors cursor-pointer">
      {pathname === "/user/favourites" ? (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 16 16">
          <path
            fill="currentColor"
            d="M14.88 4.78a3.489 3.489 0 0 0-.37-.9a3.24 3.24 0 0 0-.6-.79a3.78 3.78 0 0 0-1.21-.81a3.74 3.74 0 0 0-2.84 0a4 4 0 0 0-1.16.75l-.05.06l-.65.65l-.65-.65l-.05-.06a4 4 0 0 0-1.16-.75a3.74 3.74 0 0 0-2.84 0a3.78 3.78 0 0 0-1.21.81a3.55 3.55 0 0 0-.97 1.69a3.75 3.75 0 0 0-.12 1c0 .318.04.634.12.94a4 4 0 0 0 .36.89a3.8 3.8 0 0 0 .61.79L8 14.31l5.91-5.91c.237-.232.44-.498.6-.79A3.578 3.578 0 0 0 15 5.78a3.747 3.747 0 0 0-.12-1Z"
          />
        </svg>
      ) : (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 16 16">
          <path
            fill="currentColor"
            d="M14.88 4.78a3.489 3.489 0 0 0-.37-.9a3.24 3.24 0 0 0-.6-.79a3.78 3.78 0 0 0-1.21-.81a3.74 3.74 0 0 0-2.84 0a4 4 0 0 0-1.16.75l-.05.06l-.65.65l-.65-.65l-.05-.06a4 4 0 0 0-1.16-.75a3.74 3.74 0 0 0-2.84 0a3.78 3.78 0 0 0-1.21.81a3.55 3.55 0 0 0-.97 1.69a3.75 3.75 0 0 0-.12 1c0 .317.04.633.12.94a4 4 0 0 0 .36.89a3.8 3.8 0 0 0 .61.79L8 14.31l5.91-5.91c.237-.233.44-.5.6-.79A3.578 3.578 0 0 0 15 5.78a3.747 3.747 0 0 0-.12-1zm-1 1.63a2.69 2.69 0 0 1-.69 1.21l-5.21 5.2l-5.21-5.2a2.9 2.9 0 0 1-.44-.57a3 3 0 0 1-.27-.65a3.25 3.25 0 0 1-.08-.69A3.36 3.36 0 0 1 2.06 5a2.8 2.8 0 0 1 .27-.65c.12-.21.268-.4.44-.57a2.91 2.91 0 0 1 .89-.6a2.8 2.8 0 0 1 2.08 0c.33.137.628.338.88.59l1.36 1.37l1.36-1.37a2.72 2.72 0 0 1 .88-.59a2.8 2.8 0 0 1 2.08 0c.331.143.633.347.89.6c.174.165.32.357.43.57a2.69 2.69 0 0 1 .35 1.34a2.6 2.6 0 0 1-.06.72h-.03z"
          />
        </svg>
      )}
    </Link>
  );
}
