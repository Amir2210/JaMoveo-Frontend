import { AppHeader } from './components/AppHeader'
import { Routes, Route } from 'react-router'
import { HomeIndex } from './pages/HomeIndex'
import { Login } from './pages/Login'
import { SignUp } from './pages/SignUp'
import { SignUpAdmin } from './pages/SignUpAdmin'
import { WaitingRoom } from './pages/WaitingRoom'

function App() {

  return (
    <main>
      {/* <AppHeader /> */}
      <Routes>
        <Route path='/' element={<HomeIndex />} />
        <Route path='/login-page' element={<Login />} />
        <Route path='/sign-up-page' element={<SignUp />} />
        <Route path='/admin-sign-up-page' element={<SignUpAdmin />} />
        <Route path='/waiting-room-page' element={<WaitingRoom />} />
      </Routes>
    </main>
  )
}

export default App
