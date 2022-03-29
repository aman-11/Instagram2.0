import Post from "./Post";

const posts = [
  {
    id: "123",
    username: "aa_yush",
    userImg: "https://links.papareact.com/3ke",
    img: "https://links.papareact.com/3ke",
    caption: "this is going a crazy ride!!",
  },
  {
    id: "124",
    username: "xxx_dsd",
    userImg: "https://links.papareact.com/3ke",
    img: "https://links.papareact.com/3ke",
    caption: "this is going a crazy ride!!",
  },
  {
    id: "125",
    username: "dasasd",
    userImg: "https://links.papareact.com/3ke",
    img: "https://links.papareact.com/3ke",
    caption: "this is going a crazy ride!!",
  },
];

function Posts() {
  return (
    <div>
      {posts?.map((post) => (
        <Post
          key={post.id}
          id={post.id}
          username={post.username}
          userImg={post.userImg}
          img={post.img}
          caption={post.caption}
        />
      ))}
    </div>
  );
}

export default Posts;
