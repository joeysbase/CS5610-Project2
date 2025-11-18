import { solveSudoku } from './solver';

// function commonSudokuBuilder(size) {
//     const board = Array.from({ length: size }, () => Array(size).fill(0));
//     const totalCells = size * size;
//     let filledCells;

//     if (size === 6) {
//         filledCells = Math.floor(totalCells / 2);
//     } else if (size === 9) {
//         filledCells = 28;
//     } else {
//         filledCells = Math.floor(totalCells / 3);
//     }


//     let row = 0;
//     let col = 0;
//     while (row < size) {
//         col = 0
//         while (col < size) {
//             let num = Math.floor(Math.random() * size) + 1
//             board[row][col] = num
//             if (isValid(row, col, board)) {
//                 col++
//             }
//             col++;
//         }
//         row++;
//     }
//     let count = filledCells
//     while (count <= totalCells) {
//         row = Math.floor(Math.random() * size);
//         col = Math.floor(Math.random() * size);
//         board[row][col] = 0
//         count++;
//     }

//     return board;
// }

// function isValid(row, col, board) {
//     let num = board[row][col]
//     let size = board.length
//     for (let i = 0; i < size; i++) {
//         if (board[row][i] === num || board[i][col] === num) return false;
//     }

//     const boxRow = Math.floor(row / 3) * 3;
//     const boxCol = Math.floor(col / 3) * 3;
//     for (let r = 0; r < 3; r++) {
//         for (let c = 0; c < 3; c++) {
//             if (board[boxRow + r][boxCol + c] === num) return false;
//         }
//     }

//     return true;
// }



function shuffle(arr) {
    for (let i = arr.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [arr[i], arr[j]] = [arr[j], arr[i]];
    }
}

function getBlockSize(size) {
    if (size === 9) return { br: 3, bc: 3 };
    if (size === 6) return { br: 3, bc: 3 };
    throw new Error("Unsupported size");
}

// fills one block with shuffled numbers
function fillBlock(board, startR, startC, size, br, bc) {
    const nums = Array.from({ length: size }, (_, i) => i + 1);
    shuffle(nums);
    let idx = 0;

    for (let r = 0; r < br; r++) {
        for (let c = 0; c < bc; c++) {
            board[startR + r][startC + c] = nums[idx++];
        }
    }
}

export function generateFullBoard(size) {
    const board = Array.from({ length: size }, () => Array(size).fill(0));
    const { br, bc } = getBlockSize(size);

    // fill diagonal blocks correctly (square OR rectangular)
    for (let k = 0; k < size; k += br) {
        fillBlock(board, k, k, size, br, bc);
    }

    // solve the rest
    const solved = solveSudoku(board);
    if (!solved) return generateFullBoard(size); // regenerate if bad seed

    return board;
    // return commonSudokuBuilder(size)
}

export function generatePuzzle(size, filledCountTarget) {
    const full = generateFullBoard(size);
    const puzzle = full.map(row => row.slice());

    const positions = [];
    for (let r = 0; r < size; r++)
        for (let c = 0; c < size; c++)
            positions.push([r, c]);

    shuffle(positions);

    while (
        positions.length &&
        puzzle.flat().filter(v => v !== 0).length > filledCountTarget
    ) {
        const [r, c] = positions.pop();
        puzzle[r][c] = 0;
    }

    return puzzle;
}
