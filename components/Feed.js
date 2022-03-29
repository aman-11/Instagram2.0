import MiniProfile from "./MiniProfile";
import Posts from "./Posts";
import Stories from "./Stories";
import Suggestions from "./Suggestions";
import { useSession } from "next-auth/react";

function Feed() {
  const { data: session } = useSession();

  return (
    <main
      className={`grid grid-cols-1 md:grid-cols-2 md:max-w-3xl xl:grid-cols-3 xl:max-w-6xl mx-auto ${
        !session && "!grid-cols-1 !max-w-3xl"
      }`}
    >
      {/**left section -> stories on top and post as well(  takes 2 col of grid -> flex flex-col) */}
      <section className="col-span-2">
        {/**stories */}
        <Stories />
        {/**post */}
        <Posts />
      </section>

      {/**right section -> mini profile and suggestion with flex-col*/}
      {session && (
        <section className="hidden xl:inline-grid md:col-span-1">
          {/**mini profile */}
          <div className="fixed">
            <MiniProfile />
            <Suggestions />
          </div>
          {/**suggestion */}
        </section>
      )}
    </main>
  );
}

export default Feed;
