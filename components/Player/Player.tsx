import PlayerStyles from "../../styles/Player.module.css";
import { Control } from "./Control";
import { Info } from "./Info";

export const Player = () => {
  return (
    <div className={PlayerStyles.PlayerContainer}>
      <div className="flex w-3/4 m-auto">
        <Info />
        <Control />
      </div>
    </div>
  );
};
