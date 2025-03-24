import { useEffect, useRef } from 'react'
import { Link } from 'react-router'
import hey_jude from '../data/hey_jude.mp3'
import veech_shelo from '../data/veech_shelo.mp3'
import { useSelector } from 'react-redux'
import { SongLyrics } from '../components/SongLyrics'

export function LiveSong() {
  const selectedSong = useSelector((storeState) => storeState.systemModule.songSelected)
  const userInstrument = useSelector((storeState) => storeState.userModule.user.instrument)
  console.log('userInstrument:', userInstrument)
  console.log('selectedSong:', selectedSong)
  const audioRef = useRef(null)

  // 🎵 הפעלת השיר אוטומטית כשהקומפוננטה נטענת
  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.play().catch(error => console.log('Auto-play failed:', error))
    }
  }, [selectedSong]) // יפעל מחדש כאשר השיר מתחלף

  const playAudio = () => {
    if (audioRef.current) {
      audioRef.current.play()
    }
  }

  const pauseAudio = () => {
    if (audioRef.current) {
      audioRef.current.pause()
    }
  }

  return (
    <section className='main-bg '>
      <div className="small-container sm:big-container">
        <div className='navbar py-6'>
          <div className='text-4xl secondary-bg flex text-white font-mono font-bold size-14 justify-center items-center rounded-lg'>J</div>
          <div className=' ml-4 text-3xl font-bold tracking-wide text-white'>jaMoveo</div>
        </div>
        <div className='grid sm:grid-cols-2 gap-10 mt-5 sm:mt-20 text-[#B3B3B3]'>
          <div>
            <h1 className='text-5xl sm:text-6xl font-bold tracking-wide capitalize mb-6'>
              Now Playing <span className='secondary-txt'>{selectedSong.title} </span>
              by: <span className='secondary-txt'>{selectedSong.artist}</span>
            </h1>
            <Link to={'/'} className='btn text-white text-lg secondary-bg capitalize border-none'>Home Page</Link>
          </div>
          <div>
            <audio ref={audioRef} src={selectedSong.title === 'Hey Jude' ? hey_jude : veech_shelo} />
            <button onClick={playAudio}>▶️ נגן</button>
            <button onClick={pauseAudio}>⏸ עצור</button>
          </div>
          <div>
            <SongLyrics song={selectedSong.fullSong} userInstrument={userInstrument} />
          </div>
          <div>
            <img className='size-48 sm:size-full'
              src="https://res.cloudinary.com/dxm0sqcfp/image/upload/v1742727170/jamoveo/einlrck60guxxm8hd7jd.svg"
              alt="playing and singing song illustration" />
          </div>
        </div>
      </div>
    </section>
  )
}
