/*
 * assert - this module provides a function for error handling when a 
 *          programming error is detected.
 * 
 * Copyright (c) 2024 William Shaffer
 *
 */

/**
 * Throw an exception if the result is false.
 *
 * @param {Boolean} result the result of a test
 * @param {String} descr the description of the test
 */
export default function assert(result, descr) {
    if (!result) {
        throw new Error(descr);
    }
}    