import { useContext, useEffect, useRef, useState } from "react";
import ControlStyle from "../../styles/Control.module.css";
import Image from "next/image";
import { PLAYER_STATE } from "../../enum";
import { AudioPlayerContext } from "../../context/audioPlayerContext";
import { PauseIcon, PlayIcon } from "@heroicons/react/24/outline";

// Reference
// https://stackoverflow.com/questions/49814828/javascript-html5-audio-custom-players-seekbar-and-current-time

export const Control = () => {
  const {
    audioRef,
    playerState,
    setPlayerState,
    currentSongInfo,
    audioPlayController
  } = useContext(AudioPlayerContext) as AudioContextType;
  const [songProgress, setSongProgress] = useState<number>(0);
  const [currentTime, setCurrentTime] = useState<string>("00:00");
  const [duration, setDuration] = useState<string>("00:00");
  const [mouseDownSlider, setMouseDownSlider] = useState<boolean>(false);
  const [volume, setVolume] = useState<number>(0.2);

  const volumeSliderRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    volumeSliderRef.current!.addEventListener("wheel", (e) =>
      e.preventDefault()
    );

    window.addEventListener("keydown", function(e) {
      if (e.code == "Space") e.preventDefault();
    });

    document.addEventListener("keyup", (e) => {
      if (e.code == "Space") {
        setTimeout(() => {
          audioPlayController();
        }, 100);
      }
    });
    if (mouseDownSlider) {
      const pct = Number(songProgress) / 100;
      audioRef.current!.currentTime = (audioRef!.current!.duration || 0) * pct;
      setCurrentTime(fmtTime(audioRef.current!.currentTime));
      setDuration(fmtTime(audioRef.current!.duration));
    }
    audioRef.current!.volume = Number(volume);
  }, [
    audioPlayController,
    mouseDownSlider,
    playerState,
    setPlayerState,
    songProgress,
    volume,
    audioRef
  ]);

  const fmtTime = (second: number): string => {
    const d = new Date(0);

    if (second > 0) {
      d.setSeconds(second % 60);
      d.setMinutes(second / 60);
    }

    return d.toISOString().slice(14, 19);
  };

  const onTimeUpdateAudio = (): void => {
    if (!mouseDownSlider) {
      setCurrentTime(fmtTime(audioRef.current!.currentTime));
      setDuration(fmtTime(audioRef.current!.duration));
    }
  };

  const onLoadedDataAudio = (): void => {
    setSongProgress(0);
    setCurrentTime(fmtTime(audioRef.current!.currentTime));
    setDuration(fmtTime(audioRef.current!.duration));
  };

  return (
    <div className={ControlStyle.ControlContainer}>
      <div className="flex items-center justify-center align-middle">
        <div className="relative w-10 h-10 hover:cursor-pointer">
          <Image
            alt="previous song"
            src="/images/prev.svg"
            layout="fill"
            objectFit="contain"
          />
        </div>
        <audio
          autoPlay={false}
          onTimeUpdate={onTimeUpdateAudio}
          onLoadedData={onLoadedDataAudio}
          ref={audioRef}
          src={currentSongInfo?.source}
        />
        <div
          className="w-16 mx-4 text-center select-none hover:cursor-pointer"
          onClick={audioPlayController}
        >
          {playerState == PLAYER_STATE.PAUSE ||
            playerState == PLAYER_STATE.STOP ? (
            <PlayIcon className="w-1/2 m-auto text-gray-400" />
          ) : (
            <PauseIcon className="w-1/2 m-auto text-gray-400" />
          )}
        </div>
        <div className="relative w-10 h-10 hover:cursor-pointer">
          <Image
            alt="previous song"
            src="/images/next.svg"
            layout="fill"
            objectFit="contain"
          />
        </div>
      </div>
      <div className="flex items-center justify-around w-full m-auto lg:w-5/6">
        <p className="w-1/5">
          {currentTime} / {duration}
        </p>
        <input
          className="w-3/4 m-auto mr-4"
          type="range"
          value={songProgress}
          min="0"
          max="100"
          disabled={currentSongInfo?.source == null}
          step="0.5"
          onChange={(e) => {
            setSongProgress(Number(e.target.value));
          }}
          onTouchStart={() => {
            setMouseDownSlider(true);
          }}
          onTouchMove={() => {
            setMouseDownSlider(true);
          }}
          onMouseDown={() => {
            setMouseDownSlider(true);
          }}
          onMouseUp={() => {
            setMouseDownSlider(false);
          }}
        />
        <input
          ref={volumeSliderRef}
          className="w-20 h-full m-auto volume_slider"
          type="range"
          value={volume}
          min="0"
          max="1"
          step="0.01"
          onChange={(e) => {
            setVolume(Number(e.target.value));
          }}
          onWheel={(e) => {
            const multiplier = 0.05;
            if (e.deltaY <= 1) {
              if (volume + multiplier > 1) {
                setVolume(1);
                return;
              }
              setVolume(volume + multiplier);
            } else {
              if (volume - multiplier < 0) {
                setVolume(0);
                return;
              }
              setVolume(volume - multiplier);
            }
          }}
        />
      </div>
    </div>
  );
};
