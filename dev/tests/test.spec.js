'use strict'

import expect from 'expect'
import { 
    NOUGHTS, 
    CROSSES, 
    WINNING_TOTALS,
    BOARD_VALUES
} from '../constants.js'
import game from '../app.js'


describe('resetBoard', () => {
    it('Should reset plays and totals', () => {
        const before =  {
            noughts : [4, 9, 2],
            crosses : [3, 6, 7],
            player: CROSSES
        }

        const after = {
            noughts : [],
            crosses : [],
            player: NOUGHTS
        }

        expect(game.resetBoard(before))
            .toEqual(after)
    })
})

describe('addSquareToPlayer', () => {
    it('should add square value to player array', () => {
        const before = {
            noughts: [],
            crosses: [],
            player: CROSSES
        }
        const after = Object.assign(before, { crosses: [3] })
        expect(game.addSquareToPlayer(before, 3)).toEqual(after)    
    })
})

describe('hasPlayerWon', () => {
    it('Should return a boolean indicating whether player has won', () => {
        const before =  {
            noughts : [4, 9, 2, 8],
            crosses : [6, 7, 1],
            player: NOUGHTS
        }
        expect(game.hasPlayerWon(before)).toEqual(true)

        before.player = CROSSES
        expect(game.hasPlayerWon(before)).toEqual(false)

        before.player = NOUGHTS
        before.noughts = [4, 9]
        expect(game.hasPlayerWon(before)).toEqual(false)
    })
})

describe('isGameDraw', () => {
    it('Should return boolean indicating if game is drawn or not', () => {
        const before = {
            noughts : [3, 5, 2, 1, 6],
            crosses: [4, 9, 8, 7],
            player: NOUGHTS
        }
        expect(game.isGameDraw(before)).toEqual(true)
    })
})


describe('togglePlayer', () => {
    const before = {
        player: NOUGHTS
    }
    const after = {
        player: CROSSES
    }

    it('should toggle the current player to crosses if last player was noughts', () => {
        expect(game.togglePlayer(after)).toEqual(before)
    })
})