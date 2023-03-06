import PlayerStyles from "../../styles/Player.module.css";
import { Control } from "./Control";
import { Info } from "./Info";

export const Player = () => {
  return (
    <div className={PlayerStyles.PlayerContainer}>
      <div className="flex items-center justify-between w-full m-auto align-middle lg:w-3/4">
        <Info />
        <Control />
      </div>
    </div>
  );
};
