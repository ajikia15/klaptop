import { options } from "@/app/api/auth/[...nextauth]/options";
import { getServerSession } from "next-auth/next";
import SignInBtn from "./SignInOut";
import { SignOutBtn } from "./SignInOut";
export default async function ProfileDetails() {
  const session = await getServerSession(options);
  return (
    <>
      {session ? (
        <div className="flex flex-row justify-end space-x-2">
          <div className="grid w-12 rounded-full aspect-square place-items-center bg-accent">
            <p>h</p>
          </div>
          <div className="grid items-end grid-cols-1 grid-rows-2">
            <p className="">Your profile</p>
            <p className="text-sm text-accent">
              <SignOutBtn />
            </p>
            {/* status like playing fortnite, playing elden ring, etc. i get good ideas sometimes */}
          </div>
          <div className="grid place-items-center">V</div>
        </div>
      ) : (
        <>
          <SignInBtn />
        </>
      )}
    </>
  );
}
