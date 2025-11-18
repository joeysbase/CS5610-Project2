import React, { useContext, useRef, useEffect } from 'react'
import { SudokuContext } from '../sudoku/SudokuContext'
import { isValidPlacement } from '../sudoku/validator'


export default function Cell({ r, c, size }){
const { state, dispatch } = useContext(SudokuContext)
const value = state.board?.[r]?.[c] ?? 0
const initial = state.initial?.[r]?.[c] ?? 0
const selected = state.selected && state.selected.r === r && state.selected.c === c
const locked = state.locked
const ref = useRef(null)


useEffect(()=>{
if (selected && ref.current) ref.current.focus()
}, [selected])


const handleKey = (e) =>{
if (locked) return
if (initial !== 0) return
const key = e.key
if (key === 'Backspace' || key === 'Delete' || key === '0'){
dispatch({ type: 'SET_CELL', r, c, value: 0 })
return
}
if (/^[1-9]$/.test(key)){
const num = parseInt(key,10)
if (num >=1 && num <= size){
dispatch({ type: 'SET_CELL', r, c, value: num })
}
}
if (key === 'ArrowUp') dispatch({ type: 'SELECT_CELL', selected: { r: Math.max(0,r-1), c } })
if (key === 'ArrowDown') dispatch({ type: 'SELECT_CELL', selected: { r: Math.min(size-1,r+1), c } })
if (key === 'ArrowLeft') dispatch({ type: 'SELECT_CELL', selected: { r, c: Math.max(0,c-1) } })
if (key === 'ArrowRight') dispatch({ type: 'SELECT_CELL', selected: { r, c: Math.min(size-1,c+1) } })
}


const handleClick = () =>{
dispatch({ type: 'SELECT_CELL', selected: { r, c } })
}


const incorrect = value !== 0 && !isValidPlacement(state.board, r, c, value)


// styles for subgrid borders (thicker lines)
const classes = ['cell']
if (initial !== 0) classes.push('cell--prefill')
if (selected) classes.push('cell--selected')
if (incorrect) classes.push('cell--incorrect')


// compute border classes for block separators
// const block = size === 9 ? {rows:3, cols:3} : {rows:2, cols:3}
const block = {rows:3, cols:3}
if ((c+1) % block.cols === 0 && c !== size-1) classes.push('subgrid-border-right')
if ((r+1) % block.rows === 0 && r !== size-1) classes.push('subgrid-border-bottom')


return (
<div
ref={ref}
tabIndex={initial===0 && !locked ? 0 : -1}
role="button"
aria-label={`row ${r+1} column ${c+1} value ${value} ${initial? 'prefilled' : 'editable'}`}
className={classes.join(' ')}
onKeyDown={handleKey}
onClick={handleClick}
>
{value !== 0 ? value : ''}
</div>
)
}