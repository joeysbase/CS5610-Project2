import React from 'react'
import { Link } from 'react-router-dom'


export default function Home(){
return (
<div className="page-card">
<h1>Welcome to Sudoku</h1>
<p>Single player Sudoku. Choose a mode and play.</p>
<div style={{display:'flex', gap:8}}>
<Link to="/rules" className="button">Rules</Link>
<Link to="/games" className="button button--ghost">Play</Link>
</div>
</div>
)
}