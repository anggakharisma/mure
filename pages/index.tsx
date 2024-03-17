import type { NextPage } from "next";
import Hero from "../components/Hero";
import SongCard from "../components/SongCard/SongCard";
import { newSongs } from "../data";

const Home: NextPage = () => {
  return (
    <>
      <Hero />
      <div className="w-1/2 flex mx-auto my-0 mb-16 gap-x-2">
        <input name="search" placeholder="Search for artist or song" className="w-full bg-[#ECECEC] py-6 px-8 text-xl" />
        <button className="bg-primary p-4 px-8 text-white rounded-md text-xl">S</button>
      </div>
      <div className="mb-16 w-5/6 mx-auto">
        <h3 className="text-light-font-color mb-8 font-semibold text-4xl">Trending This Week</h3>

        
      </div>
      <div className="mb-32 pb-24"></div>
    </>
  );
};

export default Home;
