import { Link } from 'react-router';

export function HomeIndex() {
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
            <p className='sm:text-xl tracking-widest mb-3'>The app allows users to play and sing together, creating a collaborative music experience where players can play instruments while singers follow along with lyrics in real-time.</p>
            <Link to={'/login-page'} className='btn text-white text-lg secondary-bg capitalize  border-none'>login / register</Link>
          </div>
          <div>
            <img className='size-48 sm:size-full' src="https://res.cloudinary.com/dxm0sqcfp/image/upload/v1742727170/jamoveo/einlrck60guxxm8hd7jd.svg" alt="Job Tracking App" />
          </div>
        </div>
      </div>
    </section>
  )
}