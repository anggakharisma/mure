import { newSongs } from '../../data';
import SongCard from '../SongCard/SongCard';

const Trending = () => {
  return (
    <>
      <div className="block lg:flex">
        {newSongs.map(item => {
          return <SongCard key={item.title + item.year} artistInfo={item} />
        })}
      </div>

      <div className="block lg:flex">
        {newSongs.map(item => {
          return <SongCard key={item.title + item.year} artistInfo={item} />
        })}
      </div>
    </>


  )
}

export default Trending;
