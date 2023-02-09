import { useContext, useId } from "react";
import { featuredSongs, newSongs } from "../../data";
import SongCard from "../SongCard/SongCard";

const Charts = () => {
  return (
    <div className="w-full">
      <div className="w-10/12 p-4 m-auto mt-16 mb-24" id="charts">
        <h1 className="inline-block mb-4 text-6xl font-semibold tracking-widest text-primary">
          CHARTS
        </h1>
        <div className="flex justify-around w-full px-16 py-4 font-medium text-white bg-primary">
          <div>
            <h2 className="text-3xl tracking-widest text-center">
              FEATURED SONGS
            </h2>
          </div>
          <div className="hidden lg:block">
            <h2 className="text-3xl tracking-widest text-center">NEW SONGS</h2>
          </div>
        </div>
        <div className="flex w-full">
          <div className="justify-between w-full mx-32 my-4 font-medium text-white">
            {featuredSongs.map((info: ArtistInfo, index: number) => {
              return <SongCard artistInfo={info} key={index} />;
            })}
          </div>
          <div className="justify-between hidden w-full mx-32 my-4 font-medium text-white lg:block">
            {newSongs.map((info: ArtistInfo, index: number) => {
              return <SongCard artistInfo={info} key={index} />;
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Charts;
