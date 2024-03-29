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
  source: string;
}

interface AudioContextType {
  audioPlayController: () => void;
  playerState: PLAYER_STATE;
  setPlayerState: Dispatch<SetStateAction<PLAYER_STATE>>;
  currentSongInfo: ArtistInfo | null;
  setCurrentSongInfo: Dispatch<SetStateAction<ArtistInfo>>;
  setPlayerState: Dispatch<SetStateAction<PLAYER_STATE>>;
  audioRef: RefObject<HTMLAudioElement>;
  changeSource: (info: ArtistInfo) => void;
}
