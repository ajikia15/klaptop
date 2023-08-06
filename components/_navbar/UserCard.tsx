type User =
  | {
      name?: string | null | undefined;
      email?: string | null | undefined;
      image?: string | null | undefined;
      id?: string | null | undefined;
    }
  | undefined;

type Props = {
  user: User;
};

export default function UserCard({ user }: Props) {
  //console.log(user)

  const greeting = user?.name ? (
    <div className="">
      {user?.name.split("(")[1]?.replace(")", "").trim()}
      {/* or just {user?.name} */}
    </div>
  ) : null;

  // const emailDisplay = user?.email ? (
  //     <div className="flex flex-col items-center p-6 text-5xl font-bold text-black bg-white rounded-lg">
  //         {user?.email}
  //     </div>
  // ) : null

  return (
    <section className="flex flex-col gap-4">
      {greeting}
    </section>
  );
}
