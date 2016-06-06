'use strict'

import expect from 'expect'

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
    })

    expect(resetBoard(before))
        .toEqual(after)
})

