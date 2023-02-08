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
