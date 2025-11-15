import React from 'react'
import { Routes, Route } from 'react-router-dom'
import { SudokuProvider } from './context/SudokuContext'
import NavBar from './components/NavBar'
import Home from './pages/Home'
import GamesList from './pages/GamesList'
import GameEasy from './pages/GameEasy'
import GameNormal from './pages/GameNormal'
import Rules from './pages/Rules'
import Scores from './pages/Scores'
import Login from './pages/Login'
import Register from './pages/Register'


export default function App(){
return (
<SudokuProvider>
<div className="app-root">
<NavBar />
<main className="container">
<Routes>
<Route path="/" element={<Home />} />
<Route path="/games" element={<GamesList />} />
<Route path="/games/easy" element={<GameEasy />} />
<Route path="/games/normal" element={<GameNormal />} />
<Route path="/rules" element={<Rules />} />
<Route path="/scores" element={<Scores />} />
<Route path="/login" element={<Login />} />
<Route path="/register" element={<Register />} />
</Routes>
</main>
</div>
</SudokuProvider>
)
}