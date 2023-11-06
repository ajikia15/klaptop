import Link from "next/link";

export default async function Logo() {
  return (
    <Link
      href="/"
      className="rounded-full  cursor-pointer flex max-w-[132px] items-center space-x-2 px-3 py-2 bg-primary bg-opacity-30"
    >
      <svg
        className="text-primary"
        xmlns="http://www.w3.org/2000/svg"
        width="26"
        height="26"
        viewBox="0 0 24 24"
      >
        <path
          fill="currentColor"
          d="M15 7.5V2H9v5.5l3 3l3-3zM7.5 9H2v6h5.5l3-3l-3-3zM9 16.5V22h6v-5.5l-3-3l-3 3zM16.5 9l-3 3l3 3H22V9h-5.5z"
        />
      </svg>
      <p className="text-base font-bold">Klaptopi</p>
    </Link>
  );
}
