import Profile from "./Profile";
import Favourites from "./FavouritesButton";
import Logo from "./Logo";
import Search from "./Search";
export default async function Navbar() {
  return (
    <div className="flex flex-row w-[95%] py-5 mx-auto">
      <div className="grid grid-cols-[1fr_2fr_1fr_2fr] md:grid-cols-[1fr_4fr_1fr_2fr] w-full">
        <div className="grid items-center text-2xl font-semibold">
          <Logo />
        </div>
        <Search />
        <ul className="flex items-center justify-evenly border-x">
          <Favourites />
          <li className="grid bg-secondary rounded-full place-items-center h-[90%] aspect-square text-third hover:text-text transition-colors cursor-pointer">
            S
          </li>
        </ul>
        <Profile />
      </div>
    </div>
  );
}
