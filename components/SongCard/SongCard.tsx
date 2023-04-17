import Image from "next/image";
import { useContext } from "react";
import { AudioPlayerContext } from "../../context/audioPlayerContext";

const SongCard = ({ artistInfo }: SongCardProps) => {
  const { image, artistName, title, year } = artistInfo;
  const { changeSource, setCurrentSongInfo } = useContext(
    AudioPlayerContext
  ) as AudioContextType;
  return (
    <div className="relative flex items-center justify-center w-full p-4 my-24 group">
      <div
        className="relative mr-12 w-40 h-40 md:w-60 md:h-60"
        onClick={() => {
          setCurrentSongInfo(artistInfo);
          changeSource(artistInfo);
        }}
      >
        <div className="top-0 bottom-0 left-0 z-10 w-full h-full transition-all bg-black opacity-0 none group-hover:opacity-40 group-hover:absolute hover:cursor-pointer"></div>
        <Image layout="fill" src={image} objectFit="cover" alt="whatever" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20 text-4xl bg-dark-primary border-white border-solid  border-2 rounded-full p-4 opacity-85 hover:cursor-pointer">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2.5}
            stroke="#ffffff"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M5.25 5.653c0-.856.917-1.398 1.667-.986l11.54 6.348a1.125 1.125 0 010 1.971l-11.54 6.347a1.125 1.125 0 01-1.667-.985V5.653z"
            />
          </svg>
        </div>
      </div>
      <div>
        <p className="font-medium text-primary">{artistName}</p>
        <p className="my-1 font-semibold text-sub-black">{title}</p>
        <p className="text-sub-black">{year}</p>
      </div>
    </div>
  );
};

export default SongCard;
