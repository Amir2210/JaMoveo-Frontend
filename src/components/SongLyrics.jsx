export function SongLyrics({ song }) {
  return (
    <div>
      {song.map((line, lineIndex) => (
        <p key={lineIndex}>
          {line.map((word, wordIndex) => (
            <span key={wordIndex} className='mr-2'>
              {word.chords ? (
                <span className='mr-2 text-center inline-block'>
                  <span className='font-bold secondary-txt'>
                    {word.chords}
                  </span>
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