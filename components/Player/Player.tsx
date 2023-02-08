import { useState } from "react";
import { PLAYER_STATE } from "../../enum";
import PlayerStyles from "../../styles/Player.module.css";
import { Control } from "./Control";
import { Info } from "./Info";

export const Player = () => {
  const [playerState, setPlayerState] = useState<PLAYER_STATE>(
    PLAYER_STATE.STOP
  );

  return (
    <div className={PlayerStyles.PlayerContainer}>
      <div className="flex w-3/4 m-auto">
        <Info />
        <Control playerState={playerState} setPlayerState={setPlayerState} />
      </div>
    </div>
  );
};
