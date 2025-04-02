/**
 * This test suite checks the Year class implementation
 * 
 * Copyright (c) 2024 William Shaffer
 * 
 */

import { expect, test, describe } from '@jest/globals';
import { Year } from "../year.js"


// ----------------------------------------------------------------------------

/**
 * totalDays computes the number of days in the years from MinYear up to but
 * not including the specified year.
 * 
 * @param {number} year the specified year
 * @returns {number} the number of days in all years prior to year
 */
function totalDays(year) {
    let total = 0;
    for (let y = Year.MinYear; y < year; y++) {
        total += Year.daysInYear(y)
    }
    return total
}

describe('Year', () => {

    test('isYear valid low', () => {
        const year = Year.MinYear;
        const actualResult = Year.isYear(year);
        const expectedResult = true
        expect(actualResult).toEqual(expectedResult);
    });

    test('isYear valid high', () => {
        const year = Year.MaxYear;
        const actualResult = Year.isYear(year);
        const expectedResult = true
        expect(actualResult).toEqual(expectedResult);        
    });

    test('isYear invalid low', () => {
        const year = 1600;
        const actualResult = Year.isYear(year);
        const expectedResult = false
        expect(actualResult).toEqual(expectedResult);
    });

    test('isYear invalid high', () => {
        const year = 4000;
        const actualResult = Year.isYear(year);
        const expectedResult = false
        expect(actualResult).toEqual(expectedResult);
    });

    test('isLeapYear 2000', () => {
        const year = 2000;
        const actualResult = Year.isLeapYear(year);
        const expectedResult = true
        expect(actualResult).toEqual(expectedResult);       
    });

    test('isLeapYear 2000', () => {
        const year = 1900;
        const actualResult = Year.isLeapYear(year);
        const expectedResult = false;
        expect(actualResult).toEqual(expectedResult);       
    });

    test('isLeapYear 1900', () => {
        const year = 1900;
        const actualResult = Year.isLeapYear(year);
        const expectedResult = false;
        expect(actualResult).toEqual(expectedResult);       
    });

    test('isLeapYear 1904', () => {
        const year = 1904;
        const actualResult = Year.isLeapYear(year);
        const expectedResult = true;
        expect(actualResult).toEqual(expectedResult);       
    });

    test('isLeapYear 1903', () => {
        const year = 1903;
        const actualResult = Year.isLeapYear(year);
        const expectedResult = false;
        expect(actualResult).toEqual(expectedResult);       
    });

    test('daysInYear 1904', () => {
        const year = 1904;
        const actualResult = Year.daysInYear(year);
        const expectedResult = 366;
        expect(actualResult).toEqual(expectedResult);       
    });

    test('daysInYear 1900', () => {
        const year = 1900;
        const actualResult = Year.daysInYear(year);
        const expectedResult = 365;
        expect(actualResult).toEqual(expectedResult);       
    });

    test('daysInPastYears', ()=> {
        for (let year = Year.MinYear; year <= Year.MaxYear; year++) {
            let expectedDays = totalDays(year)
            let actualDays = Year.daysInPastYears(year)
            expect(actualDays).toEqual(expectedDays)
        }
    })

})

// ----------------------------------------------------------------------------