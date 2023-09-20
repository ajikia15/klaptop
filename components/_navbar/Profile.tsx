import { options } from "@/app/api/auth/[...nextauth]/options";
import { getServerSession } from "next-auth/next";
import SignInBtn from "./SignInOut";
import { SignOutBtn } from "./SignInOut";
import UserCard from "./UserCard";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
export default async function ProfileDetails() {
  const session = await getServerSession(options);
  return (
    <>
      {session ? (
        <div className="flex flex-row justify-end space-x-2">
          <div className="grid rounded-full aspect-square place-items-center bg-accent">
            <p>h</p>
          </div>
          <div className="grid items-center">
            <UserCard user={session?.user} />
            {/* <p className="text-sm text-accent"></p> items-end  grid-rows-2*/}
            {/* status like playing fortnite, playing elden ring, etc. i get good ideas sometimes */}
            <DropdownMenu>
              <DropdownMenuTrigger>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="32"
                  height="32"
                  viewBox="0 0 24 24"
                  className="text-third "
                >
                  <path fill="currentColor" d="m7 10l5 5l5-5z" />
                </svg>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="bg-background text-white border-primary">
                <DropdownMenuItem>
                  <SignOutBtn />
                </DropdownMenuItem>
                <DropdownMenuItem>სტატუსის შეცვლა</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>
      ) : (
        <>
          <SignInBtn />
        </>
      )}
    </>
  );
}
