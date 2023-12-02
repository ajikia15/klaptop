import { MainSidebarItem, SecondarySidebarItem } from "./SidebarItem";
export default async function Sidebar() {
  return (
    <div className=" flex flex-col items-center min-w-[6rem] min-h-screen px-4 text-text relative ">
      <div className="fixed  grid grid-cols-1 mt-12 ">
        {/* change to sticky if something */}
        <MainSidebarItem />
        <SecondarySidebarItem />
      </div>
    </div>
  );
}
