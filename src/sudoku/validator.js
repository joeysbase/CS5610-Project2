export function blockInfo(size) {
    if (size === 9) return { rows: 3, cols: 3 };
    if (size === 6) return { rows: 2, cols: 3 };
    throw new Error('unsupported size');
}


export function isValidPlacement(board, r, c, val) {
    const size = board.length;
    if (!val || val < 1 || val > size) return false;
    for (let j = 0; j < size; j++) if (j !== c && board[r][j] === val) return false;
    for (let i = 0; i < size; i++) if (i !== r && board[i][c] === val) return false;
    const block = blockInfo(size);
    const br = Math.floor(r / block.rows) * block.rows;
    const bc = Math.floor(c / block.cols) * block.cols;
    for (let i = 0; i < block.rows; i++) for (let j = 0; j < block.cols; j++) {
        const rr = br + i, cc = bc + j;
        if ((rr !== r || cc !== c) && board[rr][cc] === val) return false;
    }
    return true;
}


export function boardIsCompleteAndValid(board) {
    const size = board.length;
    for (let i = 0; i < size; i++) {
        for (let j = 0; j < size; j++) {
            const val = board[i][j];
            if (!val) return false;
            if (!isValidPlacement(board, i, j, val)) return false;
        }
    }
    return true;
}