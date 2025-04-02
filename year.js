/*
 * Year - Year class
 *
 * Copyright (c) 2024 William Shaffer
 *
 */

export { Year };

import assert from './assert.js';

/** 
 * @classdesc Year contains constants and functions that define a year in the date. 
 */
export default class Year {

    // ------------------------------------------------------------------------
    // Constants
    // ------------------------------------------------------------------------

    /**
     * MaxYear is the largest year handled by WayDate.
     * 
     * @constant
     * @type {number}
     * @default
     */
    static MaxYear = 3999;

    /** 
     * MinYear is the minimum year handled by WayDate. Since the Gregorian
     * calendar did not begin until 1582, there seems little point in using this
     * class for dates prior to 1582. 1601 is a convenient year for the epoch. 
     * 
     * @constant
     * @type {number}
     * @default
    */
    static MinYear = 1601;

    // ------------------------------------------------------------------------
    // Static Methods
    // ------------------------------------------------------------------------

    /**
     * isYear is true if the year is a valid year.
     * 
     * @param {number} year the year being tested
     * @returns {boolean} true if year is between MinYear and MaxYear inclusive
     */
    static isYear(year) {
        let result = true;
        if (!Number.isInteger(year)) {
            result = false;
        } else if (year < Year.MinYear || year > Year.MaxYear) {
            result = false;
        }
        return result;
    }

    /**
     * isLeapYear returns true if the year is a leap year.
     *
     * @param {number} year the year being tested
     * @returns {boolean} true if year is a leap year
     */
    static isLeapYear(year) {
        let result = false;

        assert(this.isYear(year), "Invalid year: " + year);

        if (year % 400 === 0) {
            result = true;
        } else if (year % 100 === 0) {
            result = false;
        } else if (year % 4 === 0) {
            result = true;
        }
        return result;
    }

    /**
     * daysInYear returns the number of days in the specified year
     * 
     * @param {number} year the year of interest
     * @returns {number} the number of days in the year
     */
    static daysInYear(year) {
        assert(this.isYear(year), "Invalid year: " + year);
        let days = 365;
        if (this.isLeapYear(year)) {
            days = 366;
        }
        return days;
    }

    /**
     * daysInPastYears computes the number of days in the years before 
     * the specified years.
     * 
     * -- This alorithm is from:
     * -- Edward M. Reingold and Nachum Dershowitz, Calendrical
     * -- Calculations: The Millennium Edition (Cambridge, UK: Cambridge University Press, 2001) p. 51
     * 
     * @param {number} year the specified year
     * @returns {number} returns the number of days in all the years prior to year
     */
    static daysInPastYears(year) {
        assert(this.isYear(year), "Invalid year: " + year);

        const y = year - this.MinYear;

        const days = 365 * y
            // days in prior years if all years were 365 days
            + Math.floor(y / 4)
            // additional days in leap years if all years divisible 
            // by 4 were leap years
            - Math.floor(y / 100)
            // subtracting years divisable by 100 that were not leap 
            // years if all these were not leap years
            + Math.floor(y / 400)
            // additional days divisable by 100 that are in fact leap years
        return days
    }
}