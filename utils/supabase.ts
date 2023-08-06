import { createClient } from "@supabase/supabase-js";
// import { getServerSession } from "next-auth";
// import { options } from "@/app/api/auth/[...nextauth]/options";
import { Database } from "@/types/supabase";
// const session = getServerSession(options);
// @ts-ignore
// const { supabaseAccessToken } = session;
export const supabase = createClient<Database>(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
  // {
  //   global: {
  //     headers: {
  //       Authorization: `Bearer ${supabaseAccessToken}`,
  //     },
  //   },
  // }
);
