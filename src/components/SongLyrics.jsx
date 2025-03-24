export function SongLyrics({ song, userInstrument }) {
  console.log('userInstrument:', userInstrument)
  return (
    <div>
      {song.map((line, lineIndex) => (
        <p key={lineIndex}>
          {line.map((word, wordIndex) => (
            <span key={wordIndex} className='mr-2'>
              {word.chords ? (
                <span className='mr-2 text-center inline-block'>
                  {userInstrument !== 'vocals' ?
                    <span className='font-bold secondary-txt'>
                      {word.chords}
                    </span> : null}
                  <br />
                  {word.lyrics}
                </span>
              ) : (
                word.lyrics
              )}
            </span>
          ))}
        </p>
      ))}
    </div>
  )
}