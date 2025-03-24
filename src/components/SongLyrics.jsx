export function SongLyrics({ song, userInstrument }) {
  // בדיקה אם השיר מכיל לפחות מילה אחת בעברית
  const isHebrew = song.some(line =>
    line.some(word => /[\u0590-\u05FF]/.test(word.lyrics))
  );

  return (
    <div dir={isHebrew ? 'rtl' : 'ltr'} className="text-lg">
      {song.map((line, lineIndex) => (
        <p key={lineIndex} className="mb-2">
          {line.map((word, wordIndex) => (
            <span key={wordIndex} className="mr-2 inline-block text-center">
              {word.chords ? (
                <span className="mr-2 inline-block">
                  {userInstrument !== 'vocals' ? (
                    <span className="font-bold secondary-txt block">
                      {word.chords}
                    </span>
                  ) : null}
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
  );
}
