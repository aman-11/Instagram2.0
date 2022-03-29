import Posts from "./Posts";
import Stories from "./Stories";

function Feed() {
  return (
    <main className="grid  grid-cols-1 md:grid-cols-2 md:max-w-3xl xl:grid-cols-3 xl:max-w-6xl mx-auto">
      {/**left section -> stories on top and post as well(  takes 2 col of grid -> flex flex-col) */}

      <section className="col-span-2">
        {/**stories */}
        <Stories />
        {/**post */}
        <Posts />
      </section>

      {/**right section -> mini profile and suggestion with flex-col*/}

      <section>
        {/**mini profile */}
        {/**suggestion */}
      </section>
    </main>
  );
}

export default Feed;
