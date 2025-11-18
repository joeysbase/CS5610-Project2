import React from 'react'
import { Routes, Route } from 'react-router-dom'
import { SudokuProvider } from './src/sudoku/SudokuContext'
import NavBar from './src/components/NavBar'
import Home from './src/pages/Home'
import GamesList from './src/pages/GameList'
import GameEasy from './src/pages/GameEasy'
import GameNormal from './src/pages/GameNormal'
import Rules from './src/pages/Rules'
import Scores from './src/pages/Scores'
import Login from './src/pages/Login'
import Register from './src/pages/Register'


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