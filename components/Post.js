/* eslint-disable @next/next/no-img-element */
import { useState, useEffect } from "react";
import {
  BookmarkIcon,
  ChatIcon,
  DotsHorizontalIcon,
  HeartIcon,
  PaperAirplaneIcon,
  EmojiHappyIcon,
} from "@heroicons/react/outline";
import { HeartIcon as HeartIconFilled } from "@heroicons/react/solid";
import { useSession } from "next-auth/react";
import { db, storage } from "../firebase";
import {
  addDoc,
  collection,
  serverTimestamp,
  onSnapshot,
  query,
  orderBy,
  setDoc,
  doc,
  deleteDoc,
} from "firebase/firestore";
import moment from "moment";

function Post({ id, username, userImg, img, caption }) {
  const { data: session } = useSession();
  const [comment, setComment] = useState("");
  const [listComments, setListComments] = useState([]);
  const [likes, setLikes] = useState([]);
  const [hasLiked, setHasLiked] = useState(false);

  useEffect(
    () =>
      onSnapshot(
        query(
          collection(db, "posts", id, "comments"),
          orderBy("timestamp", "desc")
        ),
        (snapshot) => setListComments(snapshot.docs)
      ),
    [db, id]
  );

  useEffect(
    () =>
      onSnapshot(query(collection(db, "posts", id, "likes")), (snapshot) =>
        setLikes(snapshot.docs)
      ),
    [db, id]
  );

  useEffect(
    () =>
      setHasLiked(
        likes.findIndex((like) => like.id === session?.user?.uid) !== -1
      ),
    [likes]
  );

  // console.log(hasLiked);

  const likePost = async () => {
    //if like -> unlike vice versa

    if (hasLiked) {
      console.log("dislike post");
      await deleteDoc(doc(db, "posts", id, "likes", session.user.uid));
    } else {
      await setDoc(doc(db, "posts", id, "likes", session.user.uid), {
        username: session.user.username,
      });
    }
  };

  const sendComment = async (e) => {
    e.preventDefault();

    const commentToSend = comment;
    setComment("");

    //firestore
    await addDoc(collection(db, "posts", id, "comments"), {
      comment: commentToSend,
      username: session.user.username,
      userImage: session.user.image,
      timestamp: serverTimestamp(),
    });
  };

  return (
    <div className="bg-white my-7 border rounded-sm">
      {/** header */}
      <div className="flex items-center p-5">
        <img
          className="rounded-full h-12 w-12 object-contain border p-1 mr-3"
          src={userImg}
          alt={username}
        />
        <p className="flex-1 font-bold">{username}</p>
        <DotsHorizontalIcon className="h-5" />
      </div>

      {/** img */}
      <img src={img} alt="" className="object-cover w-full" />

      {/** buttons */}
      {session && (
        <div className="flex justify-between px-4 pt-4">
          <div className="flex space-x-4">
            {!hasLiked ? (
              <HeartIcon onClick={likePost} className="btn" />
            ) : (
              <HeartIconFilled
                onClick={likePost}
                className="btn !text-red-600"
              />
            )}
            <ChatIcon className="btn" />
            <PaperAirplaneIcon className="btn" />
          </div>
          <BookmarkIcon className="btn" />
        </div>
      )}

      {/** captions */}
      <div className="p-5 truncate">
        {likes.length > 0 && <p className="font-bold mb-1">{likes.length} likes</p>}
        <p>
          <span className="font-bold">{username} </span>
          {caption}
        </p>
      </div>

      {/** comment */}
      {listComments.length > 0 && (
        <div className="ml-10 h-20 overflow-y-scroll scrollbar-thumb-black scrollbar-thin ">
          {listComments.map((comment) => (
            <div key={comment.id} className="flex items-center space-x-2 mb-3">
              <img
                className="h-7 rounded-full"
                src={comment.data().userImage}
                alt=""
              />
              <p className="text-sm flex-1">
                <span className="font-bold">{comment.data().username} </span>
                {comment.data().comment}
              </p>
              <p className="text-xs pr-5">
                {moment(comment.data().timestamp?.toDate()).fromNow()}
              </p>
            </div>
          ))}
        </div>
      )}

      {/** input box for comment */}
      {session && (
        <form className="flex items-center p-4">
          <EmojiHappyIcon className="h-7 cursor-pointer" />
          <input
            value={comment}
            onChange={(e) => setComment(e.target.value)}
            className="border-none flex-1 focus:ring-0"
            placeholder="Add a comment..."
            type="text"
          />
          <button
            type="submit"
            disabled={!comment.trim()}
            onClick={sendComment}
            className="font-semibold text-blue-500"
          >
            Post
          </button>
        </form>
      )}
    </div>
  );
}

export default Post;
