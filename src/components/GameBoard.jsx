// src/components/GameBoard.jsx
import React, { useContext, useEffect } from 'react'
import { SudokuContext } from '../sudoku/SudokuContext'
import Cell from './Cell'
import { boardIsCompleteAndValid } from '../sudoku/validator'

export default function GameBoard(){
  const { state, dispatch } = useContext(SudokuContext)
  const size = state.size || 9

  // Defensive: ensure board is a 2D array with correct dimensions
  const board = Array.isArray(state.board) && state.board.length === size && state.board.every(row => Array.isArray(row) && row.length === size)
    ? state.board
    : Array.from({length:size},()=>Array(size).fill(0))

  // Safe logging — avoid reading board[0].length when board might be undefined
  useEffect(()=>{
    if (!state.board) {
      console.warn('[GameBoard] state.board is undefined — showing fallback empty board')
    } else if (!Array.isArray(state.board) || state.board.length !== size) {
      console.warn('[GameBoard] state.board has unexpected shape:', state.board && state.board.length)
    }
    console.log('[GameBoard] board shape:', board.length, 'x', board[0]?.length, board)
  }, [state.board, size])

  useEffect(()=>{
    // check for completion
    if (boardIsCompleteAndValid(board) && !state.locked){
      dispatch({ type: 'LOCK_BOARD' })
    }
  }, [board, state.locked, dispatch])

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

      {/* Helpful UI when board was malformed */}
      {(!state.board || !Array.isArray(state.board) || state.board.length !== size) && (
        <div style={{marginTop:12, color:'#b45309', fontWeight:700}}>
          Board shape was unexpected — a fallback board is shown. Check console for details.
        </div>
      )}

      {state.locked && <div style={{marginTop:12, color:'green', fontWeight:700}}>Congratulations — you solved the puzzle!</div>}
    </div>
  )
}
