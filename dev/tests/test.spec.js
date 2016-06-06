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
            playsNoughts: 3,
            playsCrosses: 3,
            totalNoughts: 3,
            totalCrosses: 6
        }

        const after = {
            playsNoughts: 0,
            playsCrosses: 0,
            totalNoughts: 0,
            totalCrosses: 0
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

    it('Should return boolean indicating whether player hsa won', () => {
        let before = {
            playsNoughts: 3,
            playsCrosses: 2
        }

        WINNING_TOTALS.forEach ( v => {
            before.totalNoughts = v 
            before.totalNoughts = randomPlayTotal(2)

            expect(hasPlayerWon(NOUGHTS, before))
                .toEqual(true)
            expect(hasPlayerWon(CROSSES, before))
                .toEqual(true)
        })

        before = {
            playsNoughts: 3,
            playsCrosses: 3
        }

        WINNING_TOTALS.forEach ( v => {
            before.totalNoughts = v 
            before.totalNoughts = randomPlayTotal(3)

            expect(hasPlayerWon(NOUGHTS, before))
                .toEqual(true)
            expect(hasPlayerWon(CROSSES, before))
                .toEqual(true)
        })
    })
})

