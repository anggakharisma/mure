import { useRef, useState } from "react";
import ControlStyle from "../../styles/Control.module.css";
import Image from "next/image";

enum PLAYER_STATE {
  PLAY,
  PAUSE,
  STOP,
}

export const Control = () => {
  const [playerState, setPlayerState] = useState<PLAYER_STATE>(
    PLAYER_STATE.STOP
  );

  const audioRef = useRef<HTMLAudioElement>(null);

  return (
    <div className={ControlStyle.ControlContainer}>
      <div className="flex justify-center items-center">
        <div className="relative hover:cursor-pointer">
          <Image src="/images/prev.svg" width={40} height={40} />
        </div>
        <audio ref={audioRef} src="/audio_test.mp3" preload="metadata" loop />
        <p
          className="mx-8"
          onClick={() => {
            if (
              playerState === PLAYER_STATE.STOP ||
              playerState === PLAYER_STATE.PAUSE
            ) {
              audioRef.current?.play();
              audioRef.current!.volume = 0.2;
              setPlayerState(PLAYER_STATE.PLAY);
            } else {
              audioRef.current?.pause();
              setPlayerState(PLAYER_STATE.PAUSE);
            }
          }}
        >
          {playerState == PLAYER_STATE.PAUSE || playerState == PLAYER_STATE.STOP
            ? "pl"
            : "pl"}
        </p>
        <div className="relative hover:cursor-pointer">
          <Image src="/images/next.svg" width={40} height={40} />
        </div>
      </div>
      <div className="w-3/4 m-auto bg-gray-200 h-2"></div>
    </div>
  );
};
