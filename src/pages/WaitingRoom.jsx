export function WaitingRoom() {
  return (
    <section className='main-bg h-screen'>
      <div className="small-container sm:big-container">
        <div className='navbar py-6'>
          <div className='text-4xl secondary-bg flex text-white font-mono font-bold size-14 justify-center items-center rounded-lg'>J</div>
          <div className=' ml-4 text-3xl font-bold tracking-wide text-white'>jaMoveo</div>
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
            <img className='size-48 sm:size-full' src="https://res.cloudinary.com/dxm0sqcfp/image/upload/v1742741867/jamoveo/undraw_listening_fz9g_ktghit.svg" alt="Job Tracking App" />
          </div>
        </div>
      </div>
    </section>
  )
}