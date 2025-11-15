import React, { useContext, useEffect } from 'react'
import { SudokuContext } from '../context/SudokuContext'


export default function Timer(){
const { state, dispatch } = useContext(SudokuContext)
useEffect(()=>{
if (!state.startTime || state.locked) return;
const id = setInterval(()=>{
const elapsed = Date.now() - state.startTime;
dispatch({ type: 'TICK', elapsed });
}, 1000);
return ()=> clearInterval(id);
}, [state.startTime, state.locked]);


const sec = Math.floor(state.elapsed/1000)%60;
const min = Math.floor(state.elapsed/60000);
return <div className="timer">Time: {String(min).padStart(2,'0')}:{String(sec).padStart(2,'0')}</div>
}