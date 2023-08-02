"use client";
import { signIn, signOut } from "next-auth/react";
export default function SignInBtn() {
  return (
    <button
      className="px-2 py-1 rounded-full bg-primary"
      onClick={(e) => {
        e.preventDefault();
        signIn();
      }}>
      შესვლა
    </button>
  );
}
export function SignOutBtn() {
  return (
    <button
      className=""
      onClick={(e) => {
        e.preventDefault();
        signOut();
      }}>
      გასვლა
    </button>
  );
}
