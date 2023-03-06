import { featuredSongs, newSongs } from "../../data";
import SongCard from "../SongCard/SongCard";

const Charts = () => {
  return (
    <div className="w-full lg:mt-3.5 mt-[36rem]">
      <div className="w-10/12 p-4 m-auto mt-16 mb-24" id="charts">
        <h1 className="text-center lg:text-left mb-16 lg:mb-4 text-4xl font-semibold tracking-[40px] lg:tracking-widest text-primary lg:text-6xl max-w-full">
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
          <div className="justify-between w-full my-4 font-medium text-white">
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
