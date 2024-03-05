import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import NavBar from './components/NavBar'
import Home from './pages/Home'
import Login from './pages/Login'
import Dashboard from './pages/Dashboard'
import Tourney from './pages/Tourney'
import Match from './pages/Match'

export default function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<NavBar />}>
          <Route index element={<Home />} />
          <Route path="login" element={<Login />}/>
          <Route path="dashboard" element={<Dashboard />}/>
          <Route path="tourney" element={<Tourney />}/>
          <Route path="match" element={<Match />}/>
        </Route>
      </Routes>
    </BrowserRouter>
  )
}
