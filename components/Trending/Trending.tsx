import { newSongs } from '../../data';
import SongCard from '../SongCard/SongCard';

const Trending = () => {
  return (
    <>
      <div className="relative flex flex-wrap justify-between w-full h-full">
        {newSongs.map((item, index) => {
          return <SongCard key={index + item.title + item.year} artistInfo={item} />
        })}
      </div>
    </>
  )
}

export default Trending;
