"use client";
import Link from "next/link";
import { useState } from "react";
import { KeyboardEventHandler } from "react";
import { useSearchParams } from "next/navigation";
import { useRouter } from "next/navigation";
import { usePathname } from "next/navigation";
export default function Search() {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const keyword = searchParams.get("keyword")?.toString();
  const [userInput, setUserInput] = useState(keyword || "");
  const handleKeywordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setUserInput(event.target.value);
  };
  const [fieldActive, setFieldActive] = useState(false);
  const activateField = () => {
    setFieldActive(true);
  };
  const deactivateField = () => {
    setFieldActive(false);
  };
  const handleKeyDown: KeyboardEventHandler<HTMLInputElement> = (event) => {
    if (event.key === "Enter") {
      router.push(`/search?keyword=${encodeURIComponent(userInput)}`);
    }
  };
  const [fieldHover, setFieldHover] = useState(false);
  const handleKeywordErase = () => {
    setUserInput("");
    if (pathname.includes("/search")) router.push(`/search?keyword=`);
  };
  return (
    <div className="flex items-center justify-center lg:justify-start ">
      <div
        className={`grid h-14 px-4 mx-4 rounded-full cursor-pointer place-items-center lg:w-3/5 bg-secondary shadow-xl group   hover:border-gray-700 border transition-all relative ${
          fieldActive ? "border-gray-700" : "border-secondary"
        }`}
      >
        <input
          type="text"
          placeholder="Search..."
          value={userInput}
          onFocus={activateField}
          onBlur={deactivateField}
          onChange={handleKeywordChange}
          onKeyDown={handleKeyDown}
          className="w-full h-[94%] outline-none y transition-all bg-secondary text-text  cursor-pointer "
        />
        <div className="-translate-y-1/2 -translate-x-full right-8 top-1/2 absolute flex items-center space-x-8 h-full">
          <svg
            onClick={handleKeywordErase}
            className={` transition-opacity ${
              userInput.length > 0
                ? "opacity-70 hover:opacity-100"
                : "opacity-0"
            } `}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 256 256"
          >
            <path
              fill="currentColor"
              d="M165.66 101.66L139.31 128l26.35 26.34a8 8 0 0 1-11.32 11.32L128 139.31l-26.34 26.35a8 8 0 0 1-11.32-11.32L116.69 128l-26.35-26.34a8 8 0 0 1 11.32-11.32L128 116.69l26.34-26.35a8 8 0 0 1 11.32 11.32ZM232 128A104 104 0 1 1 128 24a104.11 104.11 0 0 1 104 104Zm-16 0a88 88 0 1 0-88 88a88.1 88.1 0 0 0 88-88Z"
            />
          </svg>

          <Link
            href={{ pathname: "/search", query: { keyword: userInput } }}
            className="aspect-square absolute  bg-primary rounded-full grid place-items-center h-5/6"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
            >
              <path
                fill="currentColor"
                d="M15.5 14h-.79l-.28-.27a6.5 6.5 0 0 0 1.48-5.34c-.47-2.78-2.79-5-5.59-5.34a6.505 6.505 0 0 0-7.27 7.27c.34 2.8 2.56 5.12 5.34 5.59a6.5 6.5 0 0 0 5.34-1.48l.27.28v.79l4.25 4.25c.41.41 1.08.41 1.49 0c.41-.41.41-1.08 0-1.49L15.5 14zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5S14 7.01 14 9.5S11.99 14 9.5 14z"
              />
            </svg>
          </Link>
        </div>
      </div>
    </div>
  );
}
