import { Link, useNavigate, } from 'react-router-dom'
export function AppHeader() {
  return (
    <header>
      <nav className='flex justify-center bg-blue-400 py-4'>
        <ul className='flex gap-5'>
          <li><Link to={'/'}>Home page</Link></li>
          <li><Link to={'/login-page'}>login page</Link></li>
          <li><Link to={'/sign-up-page'}>sign up page</Link></li>
        </ul>
      </nav>
    </header>
  )
}