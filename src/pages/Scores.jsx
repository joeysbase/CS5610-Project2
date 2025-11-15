import React from 'react'


const MOCK = [
{user:'alice', wins:34},
{user:'bob', wins:21},
{user:'carol', wins:17},
]


export default function Scores(){
return (
<div className="page-card">
<h2>High Scores</h2>
<ul>
{MOCK.map((m,i)=> <li key={i}>{m.user} — {m.wins}</li>)}
</ul>
</div>
)
}