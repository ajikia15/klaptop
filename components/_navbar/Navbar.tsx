import Profile from "./Profile";
import Favourites from "./FavouritesButton";
import Logo from "./Logo";
export default async function Navbar() {
  return (
    <div className="flex flex-row w-[95%] py-5 mx-auto">
      <div className="grid grid-cols-[1fr_2fr_1fr_2fr] md:grid-cols-[1fr_3fr_1fr_2fr] w-full">
        <div className="grid items-center text-2xl font-semibold">
          <Logo />
        </div>
        <div className="flex items-center justify-center lg:justify-start">
          <div className="grid h-12 px-4 mx-4 rounded-full cursor-pointer place-items-center lg:w-3/5 bg-secondary">
            <input
              type="text"
              placeholder="Search..."
              className="w-full h-full outline-none cursor-pointer bg-secondary"
            />
          </div>
        </div>
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
