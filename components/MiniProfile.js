/* eslint-disable @next/next/no-img-element */
import { useSession, signOut } from "next-auth/react";

function MiniProfile() {
  const { data: session } = useSession();
  // console.log("session", session);

  return (
    <div className="flex items-center justify-between mt-14 ml-10">
      <img
        className="w-16 h-16 rounded-full border p-[2px]"
        src={session?.user?.image}
        alt=""
      />

      <div className="flex-1 mx-4">
        <h2 className="font-bold">{session?.user?.username}</h2>
        <h3 className="text-xs text-gray-400">Welcome to Instagram</h3>
      </div>

      <button className="font-semibold text-sm text-blue-400" onClick={signOut}>
        Sign Out
      </button>
    </div>
  );
}

export default MiniProfile;
