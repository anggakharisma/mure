import PlayerStyles from "../../styles/Player.module.css";
import { Info } from "./Info";

export const Player = () => {
  return (
    <div className={PlayerStyles.PlayerContainer}>
      <div className="m-auto w-10/12">
        <Info />
      </div>
    </div>
  );
};

