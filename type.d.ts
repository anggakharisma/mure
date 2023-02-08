interface ControlProps {
  playerState: PLAYER_STATE;
  setPlayerState: Dispatch<PLAYER_STATE>;
}

interface SongCardProps {
  artistInfo: ArtistInfo;
}

interface ArtistInfo {
  artistName: string;
  title: string;
  image: string;
  year: string;
}

interface AudioContextType {
  currentSongSource: string;
  changeSource: (src: string) => void;
  audioPlayController: () => void;
  playerState: PLAYER_STATE;
  setPlayerState: Dispatch<SetStateAction<PLAYER_STATE>>;
  currentArtistInfo: ArtistInfo | null;
  setCurrentArtistInfo: Dispatch<SetStateAction<ArtistInfo>>;
  setPlayerState: Dispatch<SetStateAction<PLAYER_STATE>>;
  audioRef: RefObject<HTMLAudioElement>;
}
