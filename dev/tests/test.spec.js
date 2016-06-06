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
            NOUGHTS : { plays: 3, total: 3},
            CROSSES : { plays: 6, total: 6}
        }

        const after = {
            NOUGHTS : { plays: 0, total: 0},
            CROSSES : { plays: 0, total: 0}
        }

        expect(resetBoard(before))
            .toEqual(after)
    })
})

describe('hasPlayerWon', () => {
    function randomPlayTotal(n) {
        let total 
        for (let i = 0; i < n; i++ ) {
            total += BOARD_VALUES[Math.floor(Math.random() * BOARD_VALUES.length)]
        }
        return total
    }

    it('Should return boolean indicating whether player has won', () => {
        let before = {
            NOUGHTS : { plays: 3},
            CROSSES : { plays: 2}
        }

        WINNING_TOTALS.forEach ( v => {
            before.NOUGHTS.total = v 
            before.CROSSES.total = randomPlayTotal(2)

            expect(hasPlayerWon(NOUGHTS, before))
                .toEqual(true)
            expect(hasPlayerWon(CROSSES, before))
                .toEqual(false)
        })

        before.CROSSES.plays = 3

        WINNING_TOTALS.forEach ( v => {
            before.NOUGHTS.total = v
            let totalCrosses = randomPlayTotal(3)
             do { 
                before.CROSSES.total = totalCrosses
                randomPlayTotal(3)
                totalCrosses = randomPlayTotal(3)
             } while ( WINNING_TOTALS.indexOf(totalCrosses > -1))

            expect(hasPlayerWon(NOUGHTS, before))
                .toEqual(true)
            expect(hasPlayerWon(CROSSES, before))
                .toEqual(false)
        })
    })
})

