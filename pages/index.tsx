import Hls from "hls.js";
import { useEffect, useRef, useState } from "react";
import { Search } from "../assets/icons/icons";
import { ButtonPrimary } from "../components/Button/Button";
import Footer from "../components/Footer/Footer";
import Hero from "../components/Hero";
import Input from "../components/Input/Input";
import Trending from "../components/Trending/Trending";

const Home = () => {
  const vidRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    const hls = new Hls();
    hls.loadSource(`${process.env.NEXT_PUBLIC_API_URL}/2024_40_30_jDd4S2XF_pixel_galaxy.mp3.m3u8`);
    if (vidRef.current !== null) {
      hls.attachMedia(vidRef.current);
      vidRef.current.volume = 0.8;
      vidRef.current.play();
      setIsPlaying(true);

    }
  }, [vidRef]);
  return (
    <>
      {
        // <video ref={vidRef}></video>
        // <button onClick={() => {
        //   if (isPlaying) { vidRef.current?.pause(); setIsPlaying(false) }
        //   else {
        //     vidRef.current?.play(); setIsPlaying(true)
        //   }
        // }}>PRESS THIS0</button>
      }
      <Hero />
      <form onSubmit={(e) => {
        e.preventDefault();
      }} className="w-5/6 md:w-5/12 flex mx-auto my-0 mb-16 gap-x-2">
        <Input autoFocus onKeyDown={e => e.stopPropagation()} name="search" placeholder="Search for artist or song" className="w-full bg-[#ECECEC] py-6 px-8 text-md focus:border-primary focus:outline-primary" />
        <ButtonPrimary type="submit">
          <Search w={24} h={24} />
        </ButtonPrimary>
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
