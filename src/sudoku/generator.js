import { solveSudoku } from './solver'


function shuffle(arr) {
    for (let i = arr.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [arr[i], arr[j]] = [arr[j], arr[i]];
    }
}


function blockInfo(size) {
    if (size === 9) return { rows: 3, cols: 3 };
    if (size === 6) return { rows: 2, cols: 3 };
    throw new Error('unsupported');
}


export function generateFullBoard(size) {
    const board = Array.from({ length: size }, () => Array(size).fill(0));
    // fill diagonal blocks to speed up
    const block = blockInfo(size);
    for (let k = 0; k < size; k += block.rows) {
        // fill block at (k,k)
        const nums = Array.from({ length: size }, (_, i) => i + 1);
        shuffle(nums);
        let idx = 0;
        for (let i = 0; i < block.rows; i++) {
            for (let j = 0; j < block.cols; j++) {
                board[k + i][k + j] = nums[idx++];
            }
        }
    }
    solveSudoku(board);
    return board;
}


export function generatePuzzle(size, filledCountTarget) {
    const full = generateFullBoard(size);
    const puzzle = full.map(r => r.slice());
    const positions = [];
    for (let i = 0; i < size; i++) for (let j = 0; j < size; j++) positions.push([i, j]);
    shuffle(positions);
    while (puzzle.flat().filter(v => v !== 0).length > filledCountTarget && positions.length) {
        const [r, c] = positions.pop();
        puzzle[r][c] = 0;
    }
    return puzzle;
}