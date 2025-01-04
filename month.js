/*
 * Month - Month class
 *
 * @Copyright 2024 William Shaffer
 *
 */

export { Month }

import assert from './assert.js';
import Year from './year.js';

/**
 * Month contains constants constants and methods related to months.
 */
export default class Month {
    /**
     * Designated months
     * 
     */
    static JANUARY = 1;
    static FEBRUARY = 2;
    static MARCH = 3;
    static APRIL = 4;
    static MAY = 5;
    static JUNE = 6;
    static JULY = 7;
    static AUGUST = 8;
    static SEPTEMBER = 9;
    static OCTOBER = 10;
    static NOVEMBER = 11;
    static DECEMBER = 12;

    /**
     * Days in Month for non-leap year.
     * 
     * @constant
     * @type {Map}
     */
    static daysPerMonth = new Map(
        [
            [this.JANUARY, 31],
            [this.FEBRUARY, 28],
            [this.MARCH, 31],
            [this.APRIL, 30],
            [this.MAY, 31],
            [this.JUNE, 30],
            [this.JULY, 31],
            [this.AUGUST, 31],
            [this.SEPTEMBER, 30],
            [this.OCTOBER, 31],
            [this.NOVEMBER, 30],
            [this.DECEMBER, 31]
        ]
    );

    /**
     * Month abbreviations
     * 
     * @constant
     * @type {Map}
     * 
     */
    static monthAbbrev = new Map([
        [this.JANUARY, "Jan"],
        [this.FEBRUARY, "Feb"],
        [this.MARCH, "Mar"],
        [this.APRIL, "Apr"],
        [this.MAY, "May"],
        [this.JUNE, "Jun"],
        [this.JULY, "Jul"],
        [this.AUGUST, "Aug"],
        [this.SEPTEMBER, "Sep"],
        [this.OCTOBER, "Oct"],
        [this.NOVEMBER, "Nov"],
        [this.DECEMBER, "Dec"]
    ])

    // ------------------------------------------------------------------------
    // Static Methods
    // ------------------------------------------------------------------------

    /**
     * isMonth returns true if the month is a valid month.
     * 
     * @param {number} month a string being tested
     * @returns {boolean} true if month is a valid designation of a month
     */
    static isMonth(month) {
        let result = this.JANUARY <= month && month <= this.DECEMBER;
        return result
    }

    /**
     * daysInMonth returns the number of days in the specified month 
     * 
     * @param {number} month the specified month
     * @param {number} year the year containing the month
     * @returns {number} the number of days in the month
     */
    static daysInMonth(month, year) {
        assert(this.isMonth(month), "Invalid month: " + month)
        assert(Year.isYear(year), "Invalid year: " + year)
        
        let days = this.daysPerMonth.get(month);
        if (Year.isLeapYear(year) && (month === this.FEBRUARY)) {
            days++;
        }
        return days;
    }

    /**
     * daysInMonths computes total days in all the months up to 
     * the specified months.
     * 
     * @param {number} month the specified month
     * @param {number} year the year containing the month
     * @returns {number} the number of days in year up to but not 
     *  including the specified month.
     */
    static daysInMonths(month, year) {
        let days = Math.floor((367 * month - 362)/12);
        if ((month > this.FEBRUARY) && Year.isLeapYear(year)) {
            days--;
        } else if (month > this.FEBRUARY) {
            days -= 2;
        }
        return days;
    }

    /**
     * monthToString returns the three-letter abbreviation for the month
     * 
     * @param {number} month the specified month
     * @returns {string} the three-letter abbreviation for the month
     */
    static monthToString(month) {
        let abbrev = this.monthAbbrev[month]
        return abbrev
    }
}