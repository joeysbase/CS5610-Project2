import React, { useContext, useEffect } from 'react'
import { SudokuContext } from '../context/SudokuContext'
import Cell from './Cell'
import { boardIsCompleteAndValid } from '../utils/validator'


export default function GameBoard(){
const { state, dispatch } = useContext(SudokuContext)
const size = state.size || 9
const board = state.board || Array.from({length:size},()=>Array(size).fill(0))


useEffect(()=>{
// check for completion
if (boardIsCompleteAndValid(board) && !state.locked){
dispatch({ type: 'LOCK_BOARD' })
}
}, [board, state.locked])


const gridTemplate = { gridTemplateColumns: `repeat(${size}, 44px)` }
return (
<div className="page-card board-wrap">
<div style={{display:'flex', flexDirection:'column', alignItems:'center'}}>
<div className="sudoku-board" style={gridTemplate}>
{board.map((row, r) => row.map((_, c) => (
<Cell key={`${r}-${c}`} r={r} c={c} size={size} />
)))}
</div>
</div>
{state.locked && <div style={{marginTop:12, color:'green', fontWeight:700}}>Congratulations — you solved the puzzle!</div>}
</div>
)
}