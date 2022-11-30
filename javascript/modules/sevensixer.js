/**
 * Author: John Adams
 * Email: jpadams@ucsd.edu
 * Date: November 29, 2022
 * Association: Univeristy of California, San Diego
 * 
 * This is a short function written as part of a homework
 * assignment in one of my classes. I wanted to turn this
 * into a web app because I needed another excuse not to
 * actually work on my homework.
 */

import {binom, factorial, power} from "./math.js";

/**
 * seventySixersProbability returns the probability of winning
 * a game of seventy sixers. The rules are as follows. You pay
 * $1 to enter, this goes into the pot. You get n dice, and
 * you get to roll them all. All dice that rolled 6 are set
 * aside and you continue to roll the remaining dice until:
 * 1) you roll 6 on all dice and win the pot or
 * 2) you have no 6's on any of the rolled dice and you lose
 * @param {number} input 
 * @returns 
 */
function seventySixersProbability(input) {

    let probabilityArray = [1];         // store probabilities for P[i]
    let iterations = 0;                 // track how fast this algorithm is

    /**
     * outer loop calculates probability
     * for P[n] from 1 to the input value
     */
    for(let n = 1; n <= input; n++) {

        let sum = 0;                    // continuous sum over the inner loop

        /**
         * inner loop sums up probability
         * given every possible combination
         * of dice rolls
         */
        for (let i = 0; i < n; i++) {
            sum +=  power(1/6, n-i) *   // probability of getting 6 on n-i dice
                    power(5/6, i) *     // probability of not getting 6 on other i dice
                    binom(n, i) *       // number of ways to choose i dice out of n
                    probabilityArray[i];// 
            iterations ++;
        }
        probabilityArray[n] = sum; // store the probability for n
    }
    console.log(`Here are the calculated probabilities for values from 0 to ${input}`);
    console.log(probabilityArray);
    console.log(`calculating seventySixersProbability took ${iterations} iterations`);
    return probabilityArray[input];
}

export {seventySixersProbability};