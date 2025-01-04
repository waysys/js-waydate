/**
 * This test suite checks the Month class implementation
 * 
 * Copyright (c) 2024 William Shaffer
 * 
 */

import { expect, test, describe } from '@jest/globals';
import { Month } from "../month.js"

// ----------------------------------------------------------------------------

describe('Month', () => {
    test('isMonth', () => {
        const months = [Month.JANUARY, Month.DECEMBER, 0, 13];
        const expectedResults = [true, true, false, false];
        let result = true;
        let index = 0;
        for (let month of months) {
            let actualResult = Month.isMonth(month);
            let expectedResult = expectedResults[index];
            expect(actualResult).toEqual(expectedResult)
            index++;
        }
    });

    test('daysInMonth non-leap year', () => {
        const expected = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]
        for (let month = Month.JANUARY; month <= Month.DECEMBER; month++) {
            let expectedDays = expected[month-1];
            let actualDays = Month.daysInMonth(month, 2001)
            expect(actualDays).toEqual(expectedDays)
        }
    });

    test('daysInMonth leap year', () => {
        const expected = [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
        for (let month = Month.JANUARY; month <= Month.DECEMBER; month++) {
            let expectedDays = expected[month-1];
            let actualDays = Month.daysInMonth(month, 2000)
            expect(actualDays).toEqual(expectedDays)
        }
    });

    test('daysInMonth invalid month', () => {
        
    })

    test('daysInMonths non-leap year', () => {
        const expected = [0, 31, 59, 90, 120, 151, 181, 212, 243, 273, 304, 334];
        for (let month = Month.JANUARY; month <= Month.DECEMBER; month++) {
            let expectedDays = expected[month-1];
            let actualDays = Month.daysInMonths(month, 1900)
            expect(actualDays).toEqual(expectedDays)
        }
    }); 

    test('daysInMonths leap year', () => {
        const expected = [0, 31, 60, 91, 121, 152, 182, 213, 244, 274, 305, 335];
        for (let month = Month.JANUARY; month <= Month.DECEMBER; month++) {
            let expectedDays = expected[month-1];
            let actualDays = Month.daysInMonths(month, 2000)
            expect(actualDays).toEqual(expectedDays)
        }
    })
    
})