import { useState } from 'react'
import { songsData } from '../data/song.data'
import { logout, setSong } from '../store/actions/user.actions'
import { useNavigate } from 'react-router'
import { toast } from 'react-toastify'
export function AdminSearchSong() {
  const [search, setSearch] = useState('')
  const [results, setResults] = useState([])
  const navigate = useNavigate()
  // פונקציה לחיפוש שירים ללא תלות באותיות קטנות/גדולות
  const handleSearch = (query) => {
    setSearch(query)
    if (!query) {
      setResults([])
      return
    }

    const lowerQuery = query.toLowerCase() // ממיר את החיפוש לאותיות קטנות

    const filteredSongs = songsData
      .map(song => {
        const titleMatch = song.title.toLowerCase().includes(lowerQuery) // בדיקת שם השיר

        const matchedLines = song.lyrics
          .map(line => line.filter(word => word.lyrics.toLowerCase().includes(lowerQuery))) // מחפש מילים בשיר
          .filter(line => line.length > 0) // מסנן שורות ריקות

        if (titleMatch || matchedLines.length > 0) {
          return {
            title: song.title,
            artist: song.artist,
            preview: matchedLines.flat().map(word => word.lyrics).slice(0, 6).join(' '), // מציג 6 מילים ראשונות
            imgUrl: song.imgUrl,
            fullSong: song.lyrics
          }
        }
        return null
      })
      .filter(song => song !== null) // מסנן תוצאות ריקות

    setResults(filteredSongs)
  }

  async function onSetSong(song) {
    try {
      await setSong(song, true)
      navigate('/live-song-page')
    } catch (error) {
      console.log('error:', error)
    }
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
          <div className='text-4xl secondary-bg flex text-white font-mono font-bold size-14 justify-center items-center rounded-lg'>J</div>
          <div className='ml-4 text-3xl font-bold tracking-wide text-white'>jaMoveo</div>
          <button onClick={onLogout} className='text-2xl capitalize ml-auto secondary-bg flex text-white font-bold justify-center items-center rounded-lg p-2'>logout</button>
        </div>

        <div className='grid sm:grid-cols-2 gap-10 mt-5 sm:mt-20 text-[#B3B3B3]'>
          <div>
            <h1 className='text-5xl sm:text-6xl font-bold tracking-wide capitalize mb-6'>
              Search any <span className='secondary-txt'>song...</span>
            </h1>

            <label className="input input-bordered flex items-center gap-2">
              <input
                type="text"
                className="grow"
                placeholder="Search"
                value={search}
                onChange={(e) => handleSearch(e.target.value)}
              />
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="h-4 w-4 opacity-70">
                <path fillRule="evenodd" d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z" clipRule="evenodd" />
              </svg>
            </label>

            {/* תוצאות חיפוש */}
            <div className="mt-5">
              {results.length > 0 ? (
                results.map((song, index) => (
                  <div onClick={() => onSetSong(song)} key={index} className="bg-gray-800 p-4 rounded-lg mb-3 flex justify-between items-center cursor-pointer">
                    <div className=''>
                      <h2 className="text-white font-bold text-lg">{song.title}</h2>
                      <p className="text-gray-400 text-sm">{song.preview}...</p>
                    </div>
                    <div className='flex gap-2 items-center'>
                      <p>{song.artist}</p>
                      <img className='size-16' src={song.imgUrl} alt="song picture" />
                    </div>
                  </div>
                ))
              ) : search ? (
                <p className="text-gray-500 mt-3">No results found</p>
              ) : null}
            </div>
          </div>

          <div>
            <img className='size-48 sm:size-full' src="https://res.cloudinary.com/dxm0sqcfp/image/upload/v1742741494/jamoveo/undraw_happy-music_na4p_ir0kkh.svg" alt="admin search song ilustration" />
          </div>
        </div>
      </div>
    </section>
  )
}
