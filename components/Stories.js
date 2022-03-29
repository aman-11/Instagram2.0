import { faker } from "@faker-js/faker";
import { useEffect, useState } from "react";
import Story from "./Story";

function Stories() {
  const [suggestions, setSuggestions] = useState();

  useEffect(() => {
    //as the dependancy array is empty it will only run for first load
    const generateSuggestions = [...Array(20)].map((_, index) => ({
      //explicity return of obj
      id: index,
      username: faker.name.findName(),
      avatar: faker.image.avatar(),
    }));

    // console.log(suggestions);
    setSuggestions(generateSuggestions);
  }, []);

  return (
    <div className="flex space-x-2 p-6 bg-white mt-8 border-gray-200 rounded-sm overflow-x-scroll scrollbar-thin scrollbar-thumb-gray-500">
      {suggestions?.map((profile) => (
        <Story
          key={profile.id}
          img={profile.avatar}
          username={profile.username}
        />
      ))}
    </div>
  );
}

export default Stories;
