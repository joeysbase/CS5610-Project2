export const initialState = {
    size: 9,
    initial: [],
    board: [],
    selected: null,
    locked: false,
    startTime: null,
    elapsed: 0,
};


export function sudokuReducer(state, action) {
    switch (action.type) {
        case 'NEW_GAME':
            return {
                ...state,
                size: action.size,
                initial: action.initial.map(r => r.slice()),
                board: action.initial.map(r => r.slice()),
                locked: false,
                startTime: Date.now(),
                elapsed: 0,
                selected: null,
            };
        case 'RESET':
            return {
                ...state,
                board: state.initial.map(r => r.slice()),
                locked: false,
                startTime: Date.now(),
                elapsed: 0,
                selected: null,
            };
        case 'SET_CELL': {
            if (state.locked) return state;
            const { r, c, value } = action;
            const newBoard = state.board.map(row => row.slice());
            newBoard[r][c] = value;
            return { ...state, board: newBoard };
        }
        case 'SELECT_CELL':
            return { ...state, selected: action.selected };
        case 'TICK':
            return { ...state, elapsed: action.elapsed };
        case 'LOCK_BOARD':
            return { ...state, locked: true };
        default:
            return state;
    }
}