import React, { createContext, useReducer, useMemo } from 'react'
import { sudokuReducer, initialState } from './sudokuReducer'


export const SudokuContext = createContext()


export function SudokuProvider({ children }){
const [state, dispatch] = useReducer(sudokuReducer, initialState)
const value = useMemo(() => ({ state, dispatch }), [state, dispatch])
return <SudokuContext.Provider value={value}>{children}</SudokuContext.Provider>
}