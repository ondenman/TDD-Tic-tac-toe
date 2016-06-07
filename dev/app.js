'use strict'

import { 
    NOUGHTS, 
    CROSSES, 
    WINNING_TOTALS, 
    BOARD_VALUES 
} from './constants.js'

export function resetBoard () {
    return { 
       noughts: 0,
       crosses: 0
   }
}

export function hasPlayerWon (player, board) {
    // Winning combination is determined by magic square:
    // http://mathworld.wolfram.com/MagicSquare.html
    // 4   9   2
    // 3   5   7
    // 8   1   6
    return board[player] === 15 ? true : false
}
