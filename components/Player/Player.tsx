import AudioProvider from "../../context/audioPlayerContext";
import PlayerStyles from "../../styles/Player.module.css";
import { Control } from "./Control";
import { Info } from "./Info";

export const Player = () => {
  return (
    <div className={PlayerStyles.PlayerContainer}>
      <div className="flex w-full lg:w-3/4 justify-between align-middle items-center m-auto">
        <Info />
        <Control />
      </div>
    </div>
  );
};
