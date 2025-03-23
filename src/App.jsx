import { AppHeader } from './components/AppHeader'
import { Routes, Route } from 'react-router'
import { HomeIndex } from './pages/HomeIndex'
import { Login } from './pages/Login'
import { SignUp } from './pages/SignUp'

function App() {

  return (
    <div>
      <AppHeader />
      <Routes>
        <Route path='/' element={<HomeIndex />} />
        <Route path='/login-page' element={<Login />} />
        <Route path='/sign-up-page' element={<SignUp />} />
      </Routes>
    </div>
  )
}

export default App
