import { isValidPlacement } from './validator'


export function findEmpty(board) {
    for (let i = 0; i < board.length; i++) {
        for (let j = 0; j < board.length; j++) if (board[i][j] === 0) return [i, j];
    }
    return null;
}


function shuffle(arr) {
    for (let i = arr.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [arr[i], arr[j]] = [arr[j], arr[i]];
    }
}


export function solveSudoku(board) {
    const empty = findEmpty(board);
    if (!empty) return true;
    const [r, c] = empty;
    const size = board.length;
    const nums = Array.from({ length: size }, (_, i) => i + 1);
    shuffle(nums);
    for (const n of nums) {
        if (isValidPlacement(board, r, c, n)) {
            board[r][c] = n;
            if (solveSudoku(board)) return true;
            board[r][c] = 0;
        }
    }
    return false;
}