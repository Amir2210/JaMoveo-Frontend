import { AppHeader } from './components/AppHeader'
import { Routes, Route } from 'react-router'
import { HomeIndex } from './pages/HomeIndex'

function App() {

  return (
    <div>
      <AppHeader />
      <Routes>
        <Route path='/' element={<HomeIndex />} />
      </Routes>
    </div>
  )
}

export default App
