import type { NextPage } from "next";
import Footer from "../components/Footer/Footer";
import Hero from "../components/Hero";
import Trending from "../components/Trending/Trending";

const Home: NextPage = () => {
  return (
    <>
      <Hero />
      <form onSubmit={(e) => {
        e.preventDefault();
      }} className="w-5/6 md:w-1/2 flex mx-auto my-0 mb-16 gap-x-2">
        <input autoFocus onKeyDown={e => e.stopPropagation()} name="search" placeholder="Search for artist or song" className="w-full bg-[#ECECEC] py-6 px-8 text-md focus:border-primary focus:outline-primary" />
        <button className="bg-primary p-4 px-8 text-white rounded-md text-xl">S</button>
      </form>
      <div className="mb-16 w-5/6 mx-auto h-full">
        <h3 className="text-light-font-color mb-4 font-semibold text-4xl">Trending This Week</h3>
        <Trending />
      </div>
      <Footer />
      <div className="mb-20 pb-4"></div>
    </>
  );
};

export default Home;
