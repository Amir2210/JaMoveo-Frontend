import { SOCKET_EVENT_ADMIN_CHOOSE_SONG, socketService } from '../services/socket.service'
import { useEffect } from 'react'
import { logout, setSong } from '../store/actions/user.actions'
import { useNavigate } from 'react-router'
import { toast } from 'react-toastify'
export function WaitingRoom() {
  const navigate = useNavigate()
  useEffect(() => {
    socketService.on(SOCKET_EVENT_ADMIN_CHOOSE_SONG, onSetSong)
    return () => {
      socketService.off(SOCKET_EVENT_ADMIN_CHOOSE_SONG, onSetSong)
    }
  }, [])

  function onSetSong(song) {
    setSong(song, false)
    navigate('/live-song-page')
  }

  async function onLogout() {
    try {
      await logout()
      toast.success(`logged out successfully`)
      navigate('/')
    } catch (err) {
      console.log('err:', err)
      toast.error(`failed to logged out`)
    }
  }
  return (
    <section className='main-bg h-screen'>
      <div className="small-container sm:big-container">
        <div className='navbar py-6'>
          <div className='text-4xl secondary-bg flex text-white font-mono font-bold size-14 justify-center items-center rounded-lg'>S</div>
          <div className=' ml-4 text-3xl font-bold tracking-wide text-white'>SingRoom</div>
          <button onClick={onLogout} className='text-2xl capitalize ml-auto secondary-bg flex text-white font-semibold justify-center items-center rounded-lg p-2'>logout</button>
        </div>
        <div className='grid sm:grid-cols-2 gap-10 mt-5 sm:mt-20 text-[#B3B3B3]'>
          <div>
            <h1 className='text-5xl sm:text-6xl font-bold tracking-wide capitalize mb-6'>waiting for admin to select <span className="loader">
              <span className='secondary-txt mt-3'>s</span>
              <span className='secondary-txt'>o</span>
              <span className='secondary-txt'>n</span>
              <span className='secondary-txt'>g</span>
              <span className='secondary-txt'>.</span>
              <span className='secondary-txt'>.</span>
              <span className='secondary-txt'>.</span>
            </span>
            </h1>
          </div>
          <div>
            <img className='size-full' src="https://res.cloudinary.com/dxm0sqcfp/image/upload/v1742741867/jamoveo/undraw_listening_fz9g_ktghit.svg" alt="witing room ilustration" />
          </div>
        </div>
      </div>
    </section>
  )
}