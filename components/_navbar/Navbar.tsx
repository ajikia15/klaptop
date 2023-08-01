export default async function Navbar() {
  return (
    <div className="flex flex-row w-[95%] py-5 mx-auto">
      <div className="grid grid-cols-[1fr_2fr_1fr_2fr] md:grid-cols-[1fr_3fr_1fr_2fr] w-full">
        <div className="grid items-center text-2xl font-semibold">
          klaptopi.ge
        </div>
        <div className="flex items-center justify-center h-12 px-4 mx-4 rounded-full cursor-pointer lg:w-3/5 bg-secondary">
          <input
            type="text"
            placeholder="Search..."
            className="w-full h-full outline-none cursor-pointer bg-secondary"
          />
        </div>
        <ul className="flex items-center justify-evenly border-x">
          <li className="grid bg-secondary rounded-full place-items-center h-[90%] aspect-square text-third hover:text-text transition-colors cursor-pointer">
            S
          </li>
          <li className="grid bg-secondary rounded-full place-items-center h-[90%] aspect-square text-third hover:text-text transition-colors cursor-pointer">
            S
          </li>
        </ul>
        <div className="flex flex-row justify-end space-x-2">
          <div className="grid w-12 rounded-full aspect-square place-items-center bg-accent">
            <p>h</p>
          </div>
          <div className="grid items-end grid-cols-1 grid-rows-2">
            <p className="">Your profile</p>
            <p className="text-sm text-accent">Online</p>
          </div>
          <div className="grid place-items-center">V</div>
        </div>
      </div>
    </div>
  );
}
