import {
  MainSidebarItem,
  SecondarySidebarItem,
} from "./SidebarItem";
export default async function Sidebar() {
  return (
    <div className=" flex flex-col  items-center min-w-[6rem] min-h-screen px-4 text-text border border-secondary pt-12">
      <MainSidebarItem />
      <SecondarySidebarItem />
    </div>
  );
}
