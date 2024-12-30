/**
 * This test suite checks the Year class implementation
 * 
 * Copyright (c) 2024 William Shaffer
 * 
 */

import { expect, test, describe } from '@jest/globals';
import { Year } from "../year.js"


// ----------------------------------------------------------------------------

describe('Year', () => {

    test('isYear valid', () => {
        const year = 1601;
        const actualResult = Year.isYear(year);
        const expectedResult = true
        expect(actualResult).toEqual(expectedResult);
    });

    test('isYear invalid', () => {
        const year = 1600;
        const actualResult = Year.isYear(year);
        const expectedResult = false
        expect(actualResult).toEqual(expectedResult);
    })
})

// ----------------------------------------------------------------------------