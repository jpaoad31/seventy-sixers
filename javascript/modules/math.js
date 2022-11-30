/**
 * Author: John Adams
 * Email: jpadams@ucsd.edu
 * Date: November 29, 2022
 * Association: Univeristy of California, San Diego
 * 
 * This is a set of helper functions written as part of
 * my assignment. There are built in math functions in
 * Javascript, but I am too unfamiliar with the Math
 * library so I decided to write them myself
 * 
 * "You should always reinvent the wheel. That way you know
 *  exactly how it works. Well, if it does work." — John Adams 
 */

/**
 * Calculate the binomial distribution for n choose i
 * @param {number} objects
 * @param {number} choose
 * @returns n \choose i
 */
function binom(objects, choose) {
    if (choose > objects) return 1;
    if (objects == 0) return 1;
    if (objects == choose) return 1;

    let binomial = factorial(objects) / (factorial(choose) * factorial(objects - choose));
    
    return binomial;
}

/**
 * Calculate the factorial of n
 * @param {number} n
 * @returns n!
 */
function factorial(n) {
    let factorial = 1;

    for (let i = 1; i <= n; i++) {
        factorial = factorial * i;
    }

    return factorial;
}

/**
 * Calculate x to the nth power 
 * @param {number} base
 * @param {number} exponent
 * @returns x^n
 */
function power(base, exponent) {
    if (exponent == 0) return 1;

    let power = 1;

    for(let i = 0; i < exponent; i++) {
        power = power * base;
    }
    
    return power;
}

export {binom, factorial, power};