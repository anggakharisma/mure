import InfoStyle from "../../styles/Info.module.css";
import Image from "next/image";
import { useContext } from "react";
import { AudioPlayerContext } from "../../context/audioPlayerContext";

export const Info = () => {
  const { currentSongInfo, setCurrentSongInfo, changeSource } = useContext(
    AudioPlayerContext
  ) as AudioContextType;
  return (
    <div className="flex justify-center items-center align-middle">
      <div className="relative mr-8 w-24 h-24">
        {currentSongInfo?.image ? (
          <Image
            className="rounded-full"
            src={currentSongInfo?.image || "/images/placeholder.png"}
            alt="song artwork"
            layout="fill"
            objectFit="cover"
          />
        ) : (
          <h1
            className="w-20 h-20 rounded-full bg-sub-black
					"
          ></h1>
        )}
      </div>
      <div className="my-auto w-40">
        <h2 className={InfoStyle.SongTitle}>
          {currentSongInfo?.title || "No Song"}
        </h2>
        <h3 className="font-light text-gray-500">
          {currentSongInfo?.artistName || "No Artist"}
        </h3>
      </div>
    </div>
  );
};
