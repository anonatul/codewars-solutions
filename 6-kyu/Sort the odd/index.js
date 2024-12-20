/* 

You will be given an array of numbers. 
You have to sort the odd numbers in ascending order while leaving the even numbers at their original positions.

Examples
[7, 1]  =>  [1, 7]
[5, 8, 6, 3, 4]  =>  [3, 8, 6, 5, 4]
[9, 8, 7, 6, 5, 4, 3, 2, 1, 0]  =>  [1, 8, 3, 6, 5, 4, 7, 2, 9, 0]

*/



// Method 1: Bubble Sort with Destructuring
// Performance: O(n^2) in the worst case
function sortArray(array) {
    for (let i = 0; i < array.length; i++) {
        for (let j = i + 1; j < array.length; j++) {
            if (array[i] % 2 !== 0 && array[j] % 2 !== 0 && array[i] > array[j]) {
                [array[i], array[j]] = [array[j], array[i]];
            }
        }
    }
    return array;
}

// Method 2: Filter, Sort, and Map (i love while doing this method, and fuk i am falling in love with JavaScript)
// Performance: O(n log n) in the worst case
function sortArray(array) {
    const odds = array.filter((num) => num % 2 !== 0).sort((a, b) => a - b);
    let oddIndex = 0;
    return array.map((num) => num % 2 !== 0 ? odds[oddIndex++] : num);
}

