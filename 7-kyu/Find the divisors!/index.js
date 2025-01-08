/* 

Create a function named divisors/Divisors that takes an integer n > 1 and returns an array with all of 
the integer's divisors(except for 1 and the number itself), from smallest to largest. If the number is prime return 
the string '(integer) is prime' (null in C#, empty table in COBOL) (use Either String a in Haskell and Result<Vec<u32>, String> in Rust).

Examples:
divisors(12) --> [2, 3, 4, 6]
divisors(25) --> [5]
divisors(13) --> "13 is prime"

*/

function divisors(number){
    // Initialize an empty array to store divisors
    let divisors = [];
    // Loop through numbers from 2 to the square root of the given number
    for(let i = 2; i <= Math.sqrt(number); i++){
        // Check if the current number is a divisor
        if(number % i === 0){
            // Add the divisor to the array
            divisors.push(i);
            // If the divisor is not the square root of the number, add its corresponding divisor as well
            if((number / i) !== i) divisors.push(number / i);
        }
    }

    // Return the array of divisors sorted in ascending order if not empty, otherwise return a string indicating the number is prime
    return divisors.length === 0 ? `${number} is prime` : divisors.sort((a, b) => a - b);
}