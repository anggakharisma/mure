import { featuredSongs, newSongs } from "../../data";
import SongCard from "../SongCard/SongCard";

const Charts = () => {
  return (
    <div className="w-full mx-auto md:w-5/6 lg:mt-3.5 mt-[24rem] md:mt-[40rem]">
      <div className="w-full mb-24 md:p-4 md:mt-16 md:m-auto" id="charts">
        <div>
          <h1 className="text-center lg:text-left mb-16 lg:mb-4 text-4xl font-semibold tracking-[32px] lg:tracking-widest text-primary lg:text-6xl max-w-full">
            CHARTS
          </h1>
          <div className="flex flex-wrap items-center align-middle justify-items-stretch mb-40">
            <div className="flex-1">
              <h2 className="p-4 text-3xl font-medium tracking-widest text-center text-white bg-primary">
                FEATURED SONGS
              </h2>
              <div className="justify-between w-full my-4 font-medium text-white">
                {featuredSongs.map((info: ArtistInfo, index: number) => {
                  return <SongCard artistInfo={info} key={index} />;
                })}
              </div>
            </div>
            <div className="flex-1">
              <h2 className="p-4 text-3xl font-medium tracking-widest text-center text-white bg-primary">
                NEW SONGS
              </h2>
              <div className="justify-between w-full my-4 font-medium text-white">
                {newSongs.map((info: ArtistInfo, index: number) => {
                  return <SongCard artistInfo={info} key={index} />;
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Charts;
