/*
 * MonthYear - calculations involving the combination of a month and year.
 *
 * Copyright (c) 2024 William Shaffer
 *
 */

export { MonthYear }

import Month from "./month.js"
import Year from "./year.js"
import assert from './assert.js';

/**
 * @classdesc MonthYear computes values related to month, year pairs.
 */
export default class MonthYear {

    // ------------------------------------------------------------------------
    // Static Constants
    // ------------------------------------------------------------------------

    /**
     * MaxCompletedMonths is the maximum number of months that can be represented in an 
     * instance of MonthYear.  It is the number of months for the largest MonthYear.
     * 
     * @constant 
     * @type {number}
     */
    static MaxCompletedMonths = 12 * (Year.MaxYear - Year.MinYear) + Month.DECEMBER - 1;

    /**
     * MinMonthYear is the earliest MonthYear 
     * 
     * @constant
     * @type {MonthYear}
     */
    static MinMonthYear = new MonthYear(Month.JANUARY, Year.MinYear)

    /** 
     * MaxMonthYear is the latest MonthYear
     * 
     * @constant
     * @type {MonthYear}
     */
    static MaxMonthYear = new MonthYear(Month.DECEMBER, Year.MaxYear)

    // ------------------------------------------------------------------------
    // Static Methods
    // ------------------------------------------------------------------------

    /**
     * isMonthYear returns true if both the month and year are valid.
     * 
     * @param {number} month the month part of the MonthYear
     * @param {number} year the year part of the MonthYear
     * @returns {boolean} true if month and year are both valid
     */
    static isMonthYear(month, year) {
        const validMonth = Month.isMonth(month);
        const validYear = Year.isYear(year);
        return validMonth && validYear;
    }

    /**
     * createFromMonths converts completed months to the equivalent month and year.
     * 
     * @param {number} months the number of completed months
     * @returns {MonthYear} an instance of MonthYear
     */
    static createFromMonths(months) {
        assert(months >= 0, "Invalid value of months: " + months);
        const year = Math.floor(months / 12) + Year.MinYear;
        const month = months % 12 + 1;
        return new MonthYear(month, year);
    }

    // ------------------------------------------------------------------------
    // Constructor
    // ------------------------------------------------------------------------

    /**
     * Constructor 
     * 
     * @param {number} month the month part of the monthYear
     * @param {number} year the year part of the monthYear
     * @constructor
     */
    constructor(month, year) {
        assert(MonthYear.isMonthYear(month, year),
            "Invalid month or year: " + month + " " + year);
        this.month = month;
        this.year = year;
    }

    // ------------------------------------------------------------------------
    // Properties
    // ------------------------------------------------------------------------

    /**
     * getMonth returns the month of the MonthYear.
     * 
     * @returns {number} the month of the MonthYear instance.
     */
    getMonth() {
        return this.month;
    }

    /**
     * getYear returns the year of the MonthYear.
     * 
     * @returns {number} the year of the MonthYear instance.
     */
    getYear() {
        return this.year;
    }

    /**
     * completedMonths returns the number of completed months inherent in the
     * specified MonthYear.
     * 
     * @returns {number} the number of months in the specified MonthYear
     */
    completedMonths() {
        const month = this.month;
        const year = this.year;
        const completed = 12 * (year - Year.MinYear) + (month - 1);
        return completed
    }

    /**
     * daysInMonth returns the number of days in the month.
     * 
     * @returns {number} the number of days in the month
     */
    daysInMonthYear() {
        return Month.daysInMonth(this.month, this.year);
    }

    // ------------------------------------------------------------------------
    // Output
    // ------------------------------------------------------------------------

    /**
     * toString returns a string representation of the instance.
     * 
     * @returns {string} a string representation of the MonthYear instance
     */
    toString() {
        const value = "{" + this.month + ", " + this.year + "}";
        return value;
    }

    // ------------------------------------------------------------------------
    // Comparison
    // ------------------------------------------------------------------------

    /**
     * equals return true if the MonthYear passed as the argument has the same
     * month and year as this MonthYear.
     * 
     * @param {MonthYear} monthYear the instance being compared
     * @returns {boolean} true if the two instances have the same months and years
     */
    equals(monthYear) {
        assert(MonthYear.isMonthYear(monthYear.month, monthYear.year),
            "Invalid MonthYear: " + this.toString())
        const result = (this.month === monthYear.month) && (this.year === monthYear.year);
        return result;
    }

    /**
     * before returns true if the current MonthYear is before the MonthYear of the
     * argument.
     * 
     * @param {MonthYear} monthYear the MonthYear being compared to this MonthYear
     * @returns {boolean} true if this is before monthYear
     */
    before(monthYear) {
        let result = false;
        if (this.year < monthYear.year) {
            result = true;
        } else if ((this.year === monthYear.year) && (this.month < monthYear.month)) {
            result = true;
        }
        return result;
    }

    /**
     * after returns true if the current MonthYear is after the MonthYear of the
     * argument.
     * 
     * @param {MonthYear} monthYear the MonthYear being compared to this MnnthYear
     * @returns {boolean} true if this is after monthYear
     */
    after(monthYear) {
        let result = false;
        if (this.year > monthYear.year) {
            result = true;
        } else if ((this.year === monthYear.year) && (this.month > monthYear.month)) {
            result = true;
        }
        return result;
    }

    // ------------------------------------------------------------------------
    // Calculations
    // ------------------------------------------------------------------------  
    
    /**
     * increment returns a new MonthYear incrased by one month
     * 
     * @returns {MonthYear} an instance of MonthYear one month creater than this MonthYear.
     */
    increment() {
        assert(this.before(MonthYear.MaxMonthYear), "increment: the MaxMonthYear cannot be incremented")
        let result;
        if (this.month == Month.DECEMBER) {
            result = new MonthYear(Month.JANUARY, this.year + 1);
        } else {
            result = new MonthYear(this.month + 1, this.year);
        }
        return result;
    }
}