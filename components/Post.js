/* eslint-disable @next/next/no-img-element */
import React from "react";
import {
  BookmarkIcon,
  ChatIcon,
  DotsHorizontalIcon,
  HeartIcon,
  PaperAirplaneIcon,
  EmojiHappyIcon,
} from "@heroicons/react/outline";
import { HeartIcon as HeartIconFilled } from "@heroicons/react/solid";

function Post({ id, username, userImg, img, caption }) {
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
      <div className="flex justify-between px-4 pt-4">
        <div className="flex space-x-4">
          <HeartIcon className="btn" />
          <ChatIcon className="btn" />
          <PaperAirplaneIcon className="btn" />
        </div>
        <BookmarkIcon className="btn" />
      </div>
      {/** captions */}
      <div className="p-5 truncate">
        <p>
          <span className="font-bold">{username} </span>
          {caption}
        </p>
      </div>

      {/** comment */}

      {/** input box for comment */}
      <form className="flex items-center p-4">
        <EmojiHappyIcon className="h-7 cursor-pointer" />
        <input
          className="border-none flex-1 focus:ring-0"
          placeholder="Add a comment..."
          type="text"
        />
        <button className="font-semibold text-blue-500">Post</button>
      </form>
    </div>
  );
}

export default Post;
