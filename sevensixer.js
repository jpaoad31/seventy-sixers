let parray = []; // stores probability for n
parray[0] = 1;
let iterations = 0;

console.log(prob(7));
console.log(`ran in ${iterations} iterations`);

function prob(input) {
    // this loop counts up to index n
    for(let n = 1; n <= input; n++) {
        let sum = 0;
        for (let i = 0; i < n; i++) {
            sum += power(1/6, n-i) * power(5/6, i) * binom(n, i) * parray[i];
            iterations ++;
        }
        parray[n] = sum; // store the probability for n
    }
    return parray[input];
}

/**
 * Calculate the binomial distribution for n \choose i
 * @param {number} n 
 * @param {number} i 
 * @returns n \choose i
 */
function binom(n, i) {
    if (i > n) return 1;
    if (n == 0) return 1;
    if (n == i) return 1;

    let ni = n - i;

    binomial = factorial(n) / (factorial(i) * factorial(ni));
    
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
 * Calculate x to the power n
 * @param {number} x base
 * @param {number} n factor
 * @returns x^n
 */
function power(x, n) {
    if (n == 0) return 1;

    let power = 1;

    for(let i = 0; i < n; i++) {
        power = power * x;
    }
    
    return power;
}