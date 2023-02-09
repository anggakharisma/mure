// Ref: https://blog.logrocket.com/how-to-use-react-context-typescript/#create-context
import { createContext, useRef, useState } from "react";
import { PLAYER_STATE } from "../enum";

export const AudioPlayerContext = createContext<AudioContextType | null>(null);

const AudioProvider = ({ children }: { children: any }) => {
  const [currentSongInfo, setCurrentSongInfo] = useState<ArtistInfo | null>(
    null
  );
  const [playerState, setPlayerState] = useState<PLAYER_STATE>(
    PLAYER_STATE.STOP
  );
  const audioRef = useRef<HTMLAudioElement>(null);

  const changeSource = async (info: ArtistInfo) => {
    await audioRef!.current!.pause();
    audioRef!.current!.src = info.source.toString();
    await audioRef!.current!.load();
    audioRef!.current!.play();
    setPlayerState(PLAYER_STATE.PLAY);
  };



  const audioPlayController = (): void => {
    console.log(currentSongInfo);
    if (currentSongInfo == null) return;

    if (
      playerState === PLAYER_STATE.STOP ||
      playerState === PLAYER_STATE.PAUSE
    ) {
      audioRef!.current!.play();
      setPlayerState(PLAYER_STATE.PLAY);
    } else {
      audioRef!.current!.pause();
      setPlayerState(PLAYER_STATE.PAUSE);
    }
  };

  return (
    <AudioPlayerContext.Provider
      value={{
        audioPlayController,
        currentSongInfo,
        setCurrentSongInfo,
        playerState,
        setPlayerState,
        audioRef,
        changeSource
      }}
    >
      {children}
    </AudioPlayerContext.Provider>
  );
};

export default AudioProvider;
