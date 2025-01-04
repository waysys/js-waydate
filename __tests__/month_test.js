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
        const months = [Month.JANUARY, Month.DECEMBER, 0, 13, 1.5];
        const expectedResults = [true, true, false, false, false];
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
            let expectedDays = expected[month - 1];
            let actualDays = Month.daysInMonth(month, 2001)
            expect(actualDays).toEqual(expectedDays)
        }
    });

    test('daysInMonth leap year', () => {
        const expected = [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
        for (let month = Month.JANUARY; month <= Month.DECEMBER; month++) {
            let expectedDays = expected[month - 1];
            let actualDays = Month.daysInMonth(month, 2000)
            expect(actualDays).toEqual(expectedDays)
        }
    });

    test('daysInMonth invalid month', () => {
        expect(() => {
            Month.daysInMonth(0, 2023)
        }).toThrow()
    })

    test('daysInMonth invalid year', () => {
        expect(() => {
            Month.daysInMonth(1, 1600)
        }).toThrow()
    })

    test('daysInMonths non-leap year', () => {
        const expected = [0, 31, 59, 90, 120, 151, 181, 212, 243, 273, 304, 334];
        for (let month = Month.JANUARY; month <= Month.DECEMBER; month++) {
            let expectedDays = expected[month - 1];
            let actualDays = Month.daysInMonths(month, 1900)
            expect(actualDays).toEqual(expectedDays)
        }
    });

    test('daysInMonths leap year', () => {
        const expected = [0, 31, 60, 91, 121, 152, 182, 213, 244, 274, 305, 335];
        for (let month = Month.JANUARY; month <= Month.DECEMBER; month++) {
            let expectedDays = expected[month - 1];
            let actualDays = Month.daysInMonths(month, 2000)
            expect(actualDays).toEqual(expectedDays)
        }
    });

    test('toString', () => {
        const expected = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul",
            "Aug", "Sep", "Oct", "Nov", "Dec"]
        for (let month = Month.JANUARY; month <= Month.DECEMBER; month++) {
            let expectedAbbrev = expected[month - 1]
            let actualAbbrev = Month.toString(month)
            expect(actualAbbrev).toEqual(expectedAbbrev)
        }
    })

    test('before and after', () => {
        const month1 = Month.JANUARY;
        const month2 = Month.FEBRUARY;
        expect(Month.before(month1, month2)).toBeTruthy();
        expect(Month.before(month2, month1)).toBeFalsy();
        expect(Month.before(month1, month1)).toBeFalsy();
        expect(Month.after(month2, month1)).toBeTruthy();
        expect(Month.after(month1, month2)).toBeFalsy();
        expect(Month.after(month1, month1)).toBeFalsy();
    })

    test('next and prior', () => {
        const month1 = Month.JANUARY;
        const month2 = Month.FEBRUARY;
        let month = Month.next(month1);
        expect(month).toEqual(month2);
        month = Month.prior(month);
        expect(month).toEqual(month1);
        expect(() => {
            Month.next(Month.DECEMBER)
        }).toThrow();
        expect(() => {
            Month.prior(Month.JANUARY)
        }).toThrow()
    })

})