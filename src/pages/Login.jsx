import { Link } from 'react-router';

export function Login() {
  return (
    <section className='main-bg h-screen flex flex-col justify-center items-center px-10'>
      <form className='sm:bg-white sm:px-28 py-8 rounded-lg sm:border-solid sm:border-y-4 sm:border-t-[#1DB954] sm:shadow-xl'>
        <Link to={'/'} className=' flex justify-center items-center'>
          <div className=' flex text-4xl secondary-bg text-white font-mono font-bold size-14 justify-center items-center rounded-lg'>J</div>
          <div className=' ml-4 text-3xl font-bold tracking-wide secondary-txt'>JaMoveo</div>
        </Link>
        <div className='flex justify-center items-center'>
          <h1 className='text-white sm:text-black text-3xl my-4 capitalize'>login</h1>
        </div>
        <label className="input input-bordered flex items-center gap-2 my-3 w-full bg-white">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-4 h-4 opacity-70"><path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM12.735 14c.618 0 1.093-.561.872-1.139a6.002 6.002 0 0 0-11.215 0c-.22.578.254 1.139.872 1.139h9.47Z" /></svg>
          <input type="text" className="grow " placeholder="Username" name='userName' required />
        </label>
        {/* <p className={`text-red-400 sm:py-3 ${errors.userName && 'py-0'}`}>{errors.userName}</p> */}
        <label className="input input-bordered flex items-center gap-2 my-3 w-full bg-white">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-4 h-4 opacity-70"><path fillRule="evenodd" d="M14 6a4 4 0 0 1-4.899 3.899l-1.955 1.955a.5.5 0 0 1-.353.146H5v1.5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-2.293a.5.5 0 0 1 .146-.353l3.955-3.955A4 4 0 1 1 14 6Zm-4-2a.75.75 0 0 0 0 1.5.5.5 0 0 1 .5.5.75.75 0 0 0 1.5 0 2 2 0 0 0-2-2Z" clipRule="evenodd" /></svg>
          <input type="password" className="grow" placeholder="Password" name='password' required />
        </label>
        {/* <p className={`text-red-400 sm:py-3 ${errors.password && 'py-0'}`}>{errors.password}</p> */}
        <button className='btn border text-white  secondary-bg  capitalize text-2xl w-full my-3'>Login</button>
        <span className='text-lg text-white sm:text-black'>Not a member yet? <Link className='capitalize secondary-txt font-medium' to={'/sign-up-page'}> register</Link></span>
      </form>
    </section>
  )
}