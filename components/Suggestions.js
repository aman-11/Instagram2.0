/* eslint-disable @next/next/no-img-element */
import { useEffect, useState } from "react";
import { faker } from "@faker-js/faker";

function Suggestions() {
  const [suggestions, setSuggestions] = useState();

  useEffect(() => {
    const generateSuggestions = [...Array(5)].map((_, index) => ({
      //explicity return of obj
      id: index,
      username: faker.name.findName(),
      avatar: faker.image.avatar(),
    }));

    setSuggestions(generateSuggestions);
  }, []);

  return (
    <div className="mt-4 ml-10">
      <div className="flex justify-between text-sm mb-5">
        <h3 className="text-sm font-bold text-gray-400">Suggestions for you</h3>
        <button className="text-gray-600 font-semibold">See All</button>
      </div>

      {suggestions?.map((profile) => (
        <div
          key={profile.id}
          className="flex items-center justify-between mt-3"
        >
            <img className="w-10 h10 rounded-full p-[2px] border" src={profile.avatar} alt="" />

            <div className="flex-1 ml-4">
                <h2 className="font-semibold text-sm ">{profile.username}</h2>
                <h3 className="text-xs text-gray-400">New to Instagram </h3>
            </div>

            <button className="font-bold text-blue-400 text-xs">Follow</button>
        </div>
      ))}
    </div>
  );
}

export default Suggestions;
