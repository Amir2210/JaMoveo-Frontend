import { useEffect, useRef, useState } from 'react'
import { Link, useNavigate } from 'react-router'
import hey_jude from '../data/hey_jude.mp3'
import veech_shelo from '../data/veech_shelo.mp3'
import { useSelector } from 'react-redux'
import { SongLyrics } from '../components/SongLyrics'
import { goBackPickSong } from '../store/actions/user.actions'
import { SOCKET_EVENT_ADMIN_SEARCH_PICK_NEW_SONG } from '../services/socket.service'

export function LiveSong() {
  const selectedSong = useSelector((storeState) => storeState.systemModule.songSelected)
  const userInstrument = useSelector((storeState) => storeState.userModule.user.instrument)
  const isAdmin = useSelector((storeState) => storeState.userModule.user.isAdmin)
  const navigate = useNavigate()
  const audioRef = useRef(null)
  const scrollRef = useRef(null)
  const [isAutoScroll, setIsAutoScroll] = useState(false)
  const scrollIntervalRef = useRef(null)

  useEffect(() => {
    socketService.on(SOCKET_EVENT_ADMIN_SEARCH_PICK_NEW_SONG, onAdminPauseLive)
    if (audioRef.current) {
      audioRef.current.play().catch(error => console.log('Auto-play failed:', error))
    }
    return () => {
      socketService.off(SOCKET_EVENT_ADMIN_SEARCH_PICK_NEW_SONG, onAdminPauseLive)
      stopAutoScroll()
    }
  }, [selectedSong])

  function onAdminPauseLive() {
    navigate('/waiting-room-page')
  }

  async function onGoBackPickSong() {
    try {
      await goBackPickSong()
      navigate('/admin-search-song-page')
    } catch (error) {
      console.log('error:', error)
      alert('Failed to go back to pick a new song')
    }
  }

  function toggleAutoScroll() {
    if (isAutoScroll) {
      stopAutoScroll()
    } else {
      startAutoScroll()
    }
  }

  function startAutoScroll() {
    if (scrollRef.current) {
      scrollIntervalRef.current = setInterval(() => {
        scrollRef.current.scrollBy({ top: 1, behavior: 'smooth' })
      }, 60)
      setIsAutoScroll(true)
    }
  }

  function stopAutoScroll() {
    if (scrollIntervalRef.current) {
      clearInterval(scrollIntervalRef.current)
      scrollIntervalRef.current = null
      setIsAutoScroll(false)
    }
  }

  return (
    <section className='main-bg' ref={scrollRef} style={{ maxHeight: '100vh', overflowY: 'auto' }}>
      <div className="small-container sm:big-container">
        <div className='navbar py-6'>
          <div className='text-4xl secondary-bg flex text-white font-mono font-bold size-14 justify-center items-center rounded-lg'>J</div>
          <div className='ml-4 text-3xl font-bold tracking-wide text-white'>jaMoveo</div>
        </div>
        <div className='grid sm:grid-cols-2 gap-10 mt-5 sm:mt-20 text-[#B3B3B3]'>
          <div>
            <div className='flex items-center mb-6'>
              <p className='text-2xl sm:text-3xl font-bold tracking-wide capitalize pr-1'>Now Playing:</p>
              <p className='font-bold capitalize tracking-wide text-3xl sm:text-4xl secondary-txt'>{selectedSong.title}</p>
            </div>
            <div className='flex items-center mb-6'>
              <p className='text-2xl sm:text-3xl font-bold tracking-wide capitalize pr-1'>By:</p>
              <p className='font-bold capitalize tracking-wide text-3xl sm:text-4xl secondary-txt'>{selectedSong.artist}</p>
            </div>
            <div className='mb-6'>
              <img className='size-24' src={selectedSong.imgUrl} alt="" />
            </div>
            {isAdmin &&
              <button onClick={onGoBackPickSong} className='btn text-white text-lg secondary-bg capitalize border-none'>
                Pick a new song
              </button>
            }
          </div>
          <div>
            <audio ref={audioRef} src={selectedSong.title === 'Hey Jude' ? hey_jude : veech_shelo} />
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
      <button
        onClick={toggleAutoScroll}
        className="fixed bottom-6 right-6 secondary-bg text-white text-xl p-4 rounded-full shadow-lg transition">
        {isAutoScroll ? 'Stop Scrolling' : 'Start Scrolling'}
      </button>
    </section>
  )
}
