import React from 'react'
import { Link } from 'react-router-dom'


const MOCK = [
{name:'Sudoku — Easy', url:'/games/easy', author:'You'},
{name:'Sudoku — Normal', url:'/games/normal', author:'You'}
]


export default function GamesList(){
return (
<div className="page-card">
<h2>Games</h2>
<ul>
{MOCK.map((g, i)=> (
<li key={i} style={{margin:'8px 0'}}>
<Link to={g.url}>{g.name}</Link> — <span style={{color:'#666'}}>{g.author}</span>
</li>
))}
</ul>
</div>
)
}