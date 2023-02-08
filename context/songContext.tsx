// Ref: https://blog.logrocket.com/how-to-use-react-context-typescript/#create-context
import { AudioHTMLAttributes, createContext, useState } from "react";

export interface SongContextType {
  currentSongSource: string;
  setCurrentSongSource: any;
}

export const SongContext = createContext<SongContextType | null>(null);

const SongProvider = ({ children }: { children: any }) => {

	const changeSource = (audio: HTMLAudioElement) => {

	}
  const [currentSongSource, setCurrentSongSource] =
    useState<string>("");
  return (
    <SongContext.Provider value={{ setCurrentSongSource, currentSongSource }}>
      {children}
    </SongContext.Provider>
  );
};

export default SongProvider;
