import Post from "./Post";
import { useState, useEffect } from "react";
import { db, storage } from "../firebase";
import { onSnapshot, collection, query, orderBy } from "firebase/firestore";

// const posts = [
//   {
//     id: "123",
//     username: "aa_yush",
//     userImg: "https://links.papareact.com/3ke",
//     img: "https://links.papareact.com/3ke",
//     caption: "this is going a crazy ride!!",
//   },
//   {
//     id: "124",
//     username: "xxx_dsd",
//     userImg: "https://links.papareact.com/3ke",
//     img: "https://links.papareact.com/3ke",
//     caption: "this is going a crazy ride!!",
//   },
//   {
//     id: "125",
//     username: "dasasd",
//     userImg: "https://links.papareact.com/3ke",
//     img: "https://links.papareact.com/3ke",
//     caption: "this is going a crazy ride!!",
//   },
// ];

function Posts() {
  const [posts, setPosts] = useState();

  useEffect(() => {
    return onSnapshot(
      query(collection(db, "posts"), orderBy("timestamp", "desc")),
      (snapshot) => {
        setPosts(snapshot.docs);
      }
    );
  }, [db]);

  // console.log("posts", posts);

  return (
    <div>
      {posts?.map((post) => (
        <Post
          key={post.id}
          id={post.id}
          username={post.data().username}
          userImg={post.data().profileImg}
          img={post.data().image}
          caption={post.data().caption}
        />
      ))}
    </div>
  );
}

export default Posts;
