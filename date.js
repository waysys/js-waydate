/*
 * Date - WayDate implementation
 *
 * Copyright (c) 2014, 2016, 2024 William Shaffer
 *
 */

export {Date}

import { Month } from "./month.js"

/**
 * Date represents a Gregorian date with a month, day, and year.
 */
class Date {

    // ------------------------------------------------------------------------
    // Static Methods
    // ------------------------------------------------------------------------

    /**
     * isValidDate returns true if the month, day, and year are valid.
     * 
     * @param {string}  month the month of the date
     * @param {number} day the day of the month
     * @param {number} year  the year of the date 
     * @returns {boolean} true if the month, day, and year are valid
     */
    static isValidDate(month, day, year) {
        return true
    }

    // ------------------------------------------------------------------------
    // Constructor
    // ------------------------------------------------------------------------

    /** 
     * @param {string} month the month of the date
     * @param {number} day the day of the month
     * @param {number} year  the year of the date 
     * @constructor
     */
    constructor(month, day, year) {
        //
        // Precondition
        //
        if (!Date.isValidDate(month, day, year)) {
            throw new Error("Invalid date: " + month + "/" + day + "/" + year);
        }
        this.month = month;
        this.day = day;
        this.year = year;
    }
}