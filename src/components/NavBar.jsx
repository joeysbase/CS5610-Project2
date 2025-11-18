import React from 'react'
import { Link } from 'react-router-dom'


export default function NavBar(){
return (
<nav className="nav">
<div style={{flex:1}}>
<Link to="/" className="title">Sudoku</Link>
</div>
<Link to="/games">Games</Link>
<Link to="/scores">High Scores</Link>
<Link to="/rules">Rules</Link>
<Link to="/login">Login</Link>
</nav>
)
}