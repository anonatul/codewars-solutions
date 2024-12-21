/* 

Given a month as an integer from 1 to 12, return to which quarter of the year it belongs as an integer number.

For example: month 2 (February), is part of the first quarter; month 6 (June), is part of the second quarter; and month 11 (November), is part of the fourth quarter.

Constraint:

1 <= month <= 12

*/


// i'm just experimenting with different approaches and enjoying making the code more complex
const quarterOf = (month) => {
    const quarters = [[1,2,3], [4,5,6], [7,8,9], [10,11,12]];
    let quarter = 0;
    quarters.forEach((row, rowIndex) => row.includes(month) ? quarter = rowIndex + 1 : quarter);
    return quarter;
}


// btw this soo genuis mann
const quarterOf = (month) => {
    return Math.ceil(month / 3);
}