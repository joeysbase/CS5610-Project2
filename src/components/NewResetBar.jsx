import React, { useContext } from 'react'
import { SudokuContext } from '../context/SudokuContext'
import { generatePuzzle } from '../utils/generator'


export default function NewResetBar(){
const { state, dispatch } = useContext(SudokuContext)
const size = state.size || 9
const newGame = () =>{
const filled = size === 9 ? (28 + Math.floor(Math.random()*3)) : Math.round(size*size*0.5)
const puzzle = generatePuzzle(size, filled)
dispatch({ type: 'NEW_GAME', size, initial: puzzle })
}
const reset = () => dispatch({ type: 'RESET' })


return (
<div style={{display:'flex', gap:8, marginTop:12}}>
<button className="button" onClick={newGame}>New Game</button>
<button className="button button--ghost" onClick={reset}>Reset</button>
</div>
)
}