/**
 * This test suite checks the MonthYear class implementation
 * 
 * Copyright (c) 2024 William Shaffer
 * 
 */

import { expect, test, describe } from '@jest/globals';
import { MonthYear } from "../monthyear.js"
import Month from "../month.js"
import Year from "../year.js"


// ----------------------------------------------------------------------------

describe('Year', () => {

    test("isMonthYear", () => {
        let result = MonthYear.isMonthYear(Month.JANUARY, Year.MinYear);
        expect(result).toBeTruthy()
        result = MonthYear.isMonthYear(0, 2024)
        expect(result).toBeFalsy()
    });

    test("createFromMonths", () => {
        let monthYear = MonthYear.createFromMonths(0);
        expect(monthYear.getMonth()).toEqual(Month.JANUARY);
        expect(monthYear.getYear()).toEqual(Year.MinYear);
    });

    test("MaxCompletedMonths", () => {
        let monthYear = MonthYear.createFromMonths(MonthYear.MaxCompletedMonths);
        expect(monthYear.getMonth()).toEqual(Month.DECEMBER);
        expect(monthYear.getYear()).toEqual(Year.MaxYear)
    });

    test("toString", () => {
        let monthYear = new MonthYear(Month.JANUARY, Year.MaxYear);
        console.log(monthYear.toString());
        expect(monthYear.toString()).toEqual("{1, 3999}");
    });

    test("completedMonths", () => {
        const monthYear = new MonthYear(Month.DECEMBER, 1945);
        const completeMonths = monthYear.completedMonths();
        const newMonthYear = MonthYear.createFromMonths(completeMonths);
        expect(monthYear.equals(newMonthYear)).toBeTruthy();
    });

  

});
