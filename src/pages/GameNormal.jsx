import React, { useContext, useEffect } from 'react'
import { SudokuContext } from '../sudoku/SudokuContext'
import { generatePuzzle } from '../sudoku/generator'
import Timer from '../components/Timer'
import GameBoard from '../components/GameBoard'
import NewResetBar from '../components/NewResetBar'


export default function GameNormal(){
const { dispatch } = useContext(SudokuContext)
useEffect(()=>{
const filled = 28 + Math.floor(Math.random()*3)
const puzzle = generatePuzzle(9, filled)
dispatch({ type: 'NEW_GAME', size:9, initial: puzzle })
}, [])
return (
<div>
<div className="meta-row">
<h2>Normal Sudoku (9×9)</h2>
<Timer />
</div>
<GameBoard />
<NewResetBar />

</div>
)
}