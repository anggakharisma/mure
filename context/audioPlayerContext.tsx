// Ref: https://blog.logrocket.com/how-to-use-react-context-typescript/#create-context
import { createContext, RefObject, useEffect, useRef, useState } from "react";
import { PLAYER_STATE } from "../enum";

export const AudioPlayerContext = createContext<AudioContextType | null>(null);

const AudioProvider = ({ children }: { children: any }) => {
  const [currentSongSource, setCurrentSongSource] = useState<string>("");
  const [currentSongInfo, setCurrentSongInfo] = useState<ArtistInfo | null>(
    null
  );
  const [playerState, setPlayerState] = useState<PLAYER_STATE>(
    PLAYER_STATE.STOP
  );
  const audioRef = useRef<HTMLAudioElement>(null);

  const changeSource = (src: string) => {
    setCurrentSongSource(src);
    audioRef!.current!.src = src;
    audioRef!.current!.play();
    setPlayerState(PLAYER_STATE.PLAY);
  };

  const audioPlayController = (): void => {
    if ((currentSongSource == "" && !currentSongSource) || audioRef == null)
      return;
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
        changeSource,
        currentSongSource,
        audioRef
      }}
    >
      {children}
    </AudioPlayerContext.Provider>
  );
};

export default AudioProvider;
