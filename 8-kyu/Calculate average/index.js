/*

Write a function which calculates the average of the numbers in a given array.

Note: Empty arrays should return 0.

*/

function findAverage(array) {
    if (array.length === 0) return 0;

    let sumOfArray = 0;

    array.forEach((num) => {
        sumOfArray += num;
    });

    return sumOfArray / array.length;
}