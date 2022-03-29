import Image from "next/image";
import {
  SearchIcon,
  PlusCircleIcon,
  UserGroupIcon,
  HeartIcon,
  PaperAirplaneIcon,
  MenuIcon,
} from "@heroicons/react/outline";
import { HomeIcon } from "@heroicons/react/solid";

function Header() {
  return (
    <div className="shadow-sm border-b  bg-white sticky top-0 z-50">
      <div className="flex justify-between max-w-6xl mx-5 lg:mx-auto">
        {/** left hand side logo */}
        <div className="relative hidden w-24 lg:inline-grid">
          <Image
            src="https://links.papareact.com/ocw"
            alt=""
            objectFit="contain"
            layout="fill"
          />
        </div>

        <div className="relative w-10 lg:hidden flex-shrink-0 cursor-pointer">
          <Image
            src="https://links.papareact.com/jjm"
            alt=""
            objectFit="contain"
            layout="fill"
          />
        </div>

        {/** middle side search */}
        <div className="max-w-xs">
          <div className="relative p-3 mt-1 rounded-md">
            <div className="absolute inset-y-0 pl-3 flex items-center pointer-events-none">
              <SearchIcon className="h-5 w-5 text-gray-500" />
            </div>
            <input
              className="bg-gray-50 block w-full pl-10 sm:text-sm border-gray-300 rounded-md focus:ring-black focus:border-black"
              type="text"
              placeholder="Search"
            />
          </div>
        </div>

        {/** right hand side other stuffs */}
        <div className="flex items-center justify-end space-x-4">
          <HomeIcon className="navIcon" />
          <MenuIcon className="md:hidden sm:inline-flex h-10 w-10" />
          <div className="relative navIcon">
            <PaperAirplaneIcon className="navIcon rotate-45" />
            <div className="absolute -top-1 -right-2 text-xs h-5 w-5 bg-red-500 text-white rounded-full flex items-center justify-center animate-pulse">
              3
            </div>
          </div>
          <PlusCircleIcon className="navIcon" />
          <UserGroupIcon className="navIcon" />
          <HeartIcon className="navIcon" />
          {/*eslint-disable-next-line @next/next/no-img-element*/}
          <img
            alt=""
            src="https://links.papareact.com/3ke"
            className="h-10 rounded-full cursor-pointer"
          />
        </div>
      </div>
    </div>
  );
}

export default Header;
