/*
 * Year - this class contains 
 *
 * Copyright (c) 2024 William Shaffer
 *
 */

export { Year };

import assert from './assert.js';

/** 
 * Year contains constants and functions that define a year in the date. 
 */
class Year {

    // ------------------------------------------------------------------------
    // Constants
    // ------------------------------------------------------------------------

    // MaxYear is the largest year handled by WayDate.
    static MaxYear = 3999;

    /* MinYear is the minimum year handled by WayDate. Since the Gregorian
    calendar did not begin until 1582, there seems little point in using this
    class for dates prior to 1582. 1601 is a convenient year for the epoch.  
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
        let result = true 
        if (typeof year !== "number") {
            result = false;
        } else if (year < Year.MinYear || year > Year.MaxYear) {
            result = false
        } 
        return result
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
}