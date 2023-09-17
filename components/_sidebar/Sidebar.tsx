import {
  MainSidebarItem,
  SecondarySidebarItem,
} from "./SidebarItem";
export default async function Sidebar() {
  return (
    <div className=" flex flex-col items-center min-w-[6rem] min-h-screen px-4 text-text relative ">
      <div className="sticky left-0 grid grid-cols-1 mt-12 top-12">
        <MainSidebarItem />
        <SecondarySidebarItem />
      </div>
    </div>
  );
}
