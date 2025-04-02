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
 * 
 * @classdesc Month contains constants constants and methods related to months.
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
     * @type {Array}
     */
    static daysPerMonth = 
        [
            31,
            28,
            31,
            30,
            31,
            30,
            31,
            31,
            30,
            31,
            30,
            31,
        ];

    /**
     * Month abbreviations
     * 
     * @constant
     * @type {Array}
     * 
     */
    static monthAbbrev = [
        "Jan",
        "Feb",
        "Mar",
        "Apr",
        "May",
        "Jun",
        "Jul",
        "Aug",
        "Sep",
        "Oct",
        "Nov",
        "Dec",
    ];

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
        let result = Number.isInteger(month);
        result = result && (this.JANUARY <= month && month <= this.DECEMBER);
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

        let days = this.daysPerMonth[month - 1];
        if (Year.isLeapYear(year) && (month === this.FEBRUARY)) {
            days++;
        }
        return days;
    }

    /**
     * daysInMonths computes total days in all the months up to 
     * the specified months.
     * 
     * -- This algorithm is from:
     * -- Edward M. Reingold and Nachum Dershowitz, Calendrical Calculations: The
     * -- Millennium Edition (Cambridge, UK: Cambridge University Press, 2001) 
     * 
     * @param {number} month the specified month
     * @param {number} year the year containing the month
     * @returns {number} the number of days in year up to but not 
     *  including the specified month.
     */
    static daysInMonths(month, year) {
        assert(this.isMonth(month), "Invalid month: " + month)
        assert(Year.isYear(year), "Invalid year: " + year)

        let days = Math.floor((367 * month - 362) / 12);
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
    static toString(month) {
        assert(this.isMonth(month), "Invalid month: " + month)

        let abbrev = this.monthAbbrev[month - 1]
        return abbrev
    }

    /**
     * before returns true if the first month is before the second month.
     * 
     * @param {number} month1 the first month
     * @param {number} month2 the second month
     * @returns {boolean} true if month1 < month2
     */
    static before(month1, month2) {
        return month1 < month2
    }

    /**
     * after returns true if the first month is after the second month.
     * 
     * @param {number} month1 the first month
     * @param {number} month2 the second month
     * @returns {boolean} true if month1 > month2
     */
    static after(month1, month2) {
        return month1 > month2
    }

    /**
     * next returns the next month after the specified month.  If the 
     * specified month is December, the method throws an exception.
     * 
     * @param {number} month the month to be advanced
     * @returns {number} the month after the specified month
     */
    static next(month) {
        assert(this.before(month, this.DECEMBER), "Cannot invoke next on DECEMBER");
        return month + 1;
    }

    /**
     * prior returns the month before the specified month.  If the specified month
     * is January, the method throws an exception.
     */
    static prior(month) {
        assert(this.after(month, this.JANUARY), "Cannot invoke prior on JANUARY");
        return month - 1;
    }
}