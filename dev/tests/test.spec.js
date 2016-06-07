'use strict'

import expect from 'expect'
import { 
    NOUGHTS, 
    CROSSES, 
    WINNING_TOTALS,
    BOARD_VALUES
} from '../constants.js'
import { resetBoard, hasPlayerWon } from '../app.js'

describe('Dummy test', () => {
    it('Should pass', () => {
        expect(true)
            .toEqual(true)
    })
})

describe('resetBoard', () => {
    it('Should reset plays and totals', () => {
        const before =  {
            noughts : 3,
            crosses : 6,
        }

        const after = {
            noughts : 0,
            crosses : 0,
        }

        expect(resetBoard(before))
            .toEqual(after)
    })
})

describe('hasPlayerWon', () => {
    it('Should return a boolean indicating whether player has won', () => {
        const before =  {
            noughts : 15,
            crosses : 8
        }
        expect(hasPlayerWon(NOUGHTS, before)).toEqual(true)
        expect(hasPlayerWon(CROSSES, before)).toEqual(false)
    })
})

