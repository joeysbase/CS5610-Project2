import React, { useContext, useEffect } from 'react'
import { SudokuContext } from '../context/SudokuContext'
import { generatePuzzle } from '../utils/generator'
import Timer from '../components/Timer'
import GameBoard from '../components/GameBoard'
import NewResetBar from '../components/NewResetBar'
import NumberPad from '../components/NumberPad'


export default function GameEasy(){
const { dispatch } = useContext(SudokuContext)
useEffect(()=>{
const filled = Math.round(6*6*0.5) // ~50%
const puzzle = generatePuzzle(6, filled)
dispatch({ type: 'NEW_GAME', size:6, initial: puzzle })
}, [])
return (
<div>
<div className="meta-row">
<h2>Easy Sudoku (6×6)</h2>
<Timer />
</div>
<GameBoard />
<NewResetBar />
<NumberPad />
</div>
)
}