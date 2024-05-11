import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import NavBar from './components/NavBar'
import Home from './pages/Home'
import Login from './pages/Login'
import Buy from './pages/Buy'
import Sell from './pages/Sell'
import Account from './pages/Account'
import Profile from './pages/Profile'
import Settings from './pages/Settings'

export default function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<NavBar />}>
          <Route index element={<Home />} />
          <Route path="login" element={<Login />}/>
          <Route path="buy" element={<Buy />}/>
          <Route path="sell" element={<Sell />}/>
          <Route path="account" element={<Account />}/>
          <Route path="profile" element={<Profile />}/>
          <Route path="settings" element={<Settings />}/>
        </Route>
      </Routes>
    </BrowserRouter>
  )
}
