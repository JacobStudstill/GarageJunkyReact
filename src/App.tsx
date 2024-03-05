import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import NavBar from './components/NavBar'
import Home from './pages/Home'
import Login from './pages/Login'
import Buy from './pages/Buy'
import Sell from './pages/Sell'

export default function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<NavBar />}>
          <Route index element={<Home />} />
          <Route path="login" element={<Login />}/>
          <Route path="buy" element={<Buy />}/>
          <Route path="sell" element={<Sell />}/>
        </Route>
      </Routes>
    </BrowserRouter>
  )
}
