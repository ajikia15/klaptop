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
          <div className="grid items-center">
            {/* <p className="text-sm text-accent"></p> items-end  grid-rows-2*/}
            {/* status like playing fortnite, playing elden ring, etc. i get good ideas sometimes */}
            <DropdownMenu>
              <DropdownMenuTrigger>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  className="text-third"
                >
                  <g fill="none" fill-rule="evenodd">
                    <path d="M24 0v24H0V0h24ZM12.593 23.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035c-.01-.004-.019-.001-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427c-.002-.01-.009-.017-.017-.018Zm.265-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.007l.201.093c.012.004.023 0 .029-.008l.004-.014l-.034-.614c-.003-.012-.01-.02-.02-.022Zm-.715.002a.023.023 0 0 0-.027.006l-.006.014l-.034.614c0 .012.007.02.017.024l.015-.002l.201-.093l.01-.008l.004-.011l.017-.43l-.003-.012l-.01-.01l-.184-.092Z" />
                    <path
                      fill="currentColor"
                      d="M13.06 16.06a1.5 1.5 0 0 1-2.12 0l-5.658-5.656a1.5 1.5 0 1 1 2.122-2.121L12 12.879l4.596-4.596a1.5 1.5 0 0 1 2.122 2.12l-5.657 5.658Z"
                    />
                  </g>
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
          <div className="grid items-center">
            <UserCard user={session?.user} />
          </div>

          <div className="grid rounded-lg border-2 border-third shadow-lg border-opacity-80 my-1 aspect-square place-items-center bg-accent">
            <p>h</p>
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
