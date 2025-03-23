import { useRef } from 'react';
import { Link } from 'react-router';
import hey_jude from '../data/hey_jude.mp3'
import veech_shelo from '../data/veech_shelo.mp3'
import { useSelector } from 'react-redux';
import { SongLyrics } from '../components/SongLyrics';
export function LiveSong() {
  const selectedSong = useSelector((storeState) => storeState.systemModule.songSelected)
  console.log('selectedSong:', selectedSong.fullSong)
  const audioRef = useRef(null)

  const playAudio = () => {
    if (audioRef.current) {
      audioRef.current.play()
    }
  };

  const pauseAudio = () => {
    if (audioRef.current) {
      audioRef.current.pause()
    }
  }
  return (
    <section className='main-bg h-screen'>
      <div className="small-container sm:big-container">
        <div className='navbar py-6'>
          <div className='text-4xl secondary-bg flex text-white font-mono font-bold size-14 justify-center items-center rounded-lg'>J</div>
          <div className=' ml-4 text-3xl font-bold tracking-wide text-white'>jaMoveo</div>
        </div>
        <div className='grid sm:grid-cols-2 gap-10 mt-5 sm:mt-20 text-[#B3B3B3]'>
          <div>
            <h1 className='text-5xl sm:text-6xl font-bold tracking-wide capitalize mb-6'><span className='secondary-txt'>Playing</span>  and <span className='secondary-txt'>singing</span>  together</h1>
            <Link to={'/'} className='btn text-white text-lg secondary-bg capitalize  border-none'>home page</Link>
          </div>
          <div>
            <audio ref={audioRef} src={selectedSong.title === 'Hey Jude' ? hey_jude : veech_shelo} />
            <button onClick={playAudio}>▶️ נגן</button>
            <button onClick={pauseAudio}>⏸ עצור</button>
          </div>
          <div>
            <SongLyrics song={selectedSong.fullSong} />
          </div>
          <div>
            <img className='size-48 sm:size-full' src="https://res.cloudinary.com/dxm0sqcfp/image/upload/v1742727170/jamoveo/einlrck60guxxm8hd7jd.svg" alt="playing and singing song ilustration" />
          </div>
        </div>
      </div>
    </section>
  )
}