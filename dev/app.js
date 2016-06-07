'use strict'

import { 
    NOUGHTS, 
    CROSSES,
} from './constants.js'

import Combinatorics from 'js-combinatorics'

module.exports = {
    
    resetBoard: function() {
        return { 
            noughts: [],
            crosses: [],
            player: NOUGHTS
        }
    },

    addSquareToPlayer: function(state, value) {
        let arr = state[state.player]
        arr.push(value)
        return state.player === NOUGHTS
            ? Object.assign(state, { noughts: arr })
            : Object.assign(state, { crosses: arr })
    },

    hasPlayerWon: function(state) {
        // Winning combination is determined by magic square:
        // http://mathworld.wolfram.com/MagicSquare.html
        // A winning line will always add up to 15
        // 4   9   2
        // 3   5   7
        // 8   1   6
        let arr = state[state.player]
        if (arr.length < 3) return false

        // Return true if any 3 moves add up to 15
        let combinations = Combinatorics.combination(arr, 3)
        let a
        while(a = combinations.next()) {
            let total = a.reduce((total, i) => total + i)
            if (total === 15) return true
        }
        return false
    },

    isGameDraw: function(state) {
        let totalPlays = 
            state[NOUGHTS].length
            + state[CROSSES].length

        return totalPlays === 9 ? true : false
    },

    togglePlayer: function(state) {
        return state.player === NOUGHTS
            ? Object.assign(state, { player: CROSSES })
            : Object.assign(state, { player: NOUGHTS })
    }
    
}
