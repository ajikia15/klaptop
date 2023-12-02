import Profile from "./Profile";
import Favourites from "./FavouritesButton";
import Logo from "./Logo";
import Search from "./Search";
export default async function Navbar() {
  return (
    <div className="flex flex-row w-full py-3 mx-auto sticky z-20 bg-background top-0 left-0 justify-center shadow-lg">
      {/* remove sticky if something im sleepy now */}
      <div className="grid grid-cols-[1fr_2fr_1fr_2fr] md:grid-cols-[1fr_4fr_1fr_2fr] w-[95%]">
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
