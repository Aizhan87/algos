/*
Given a square matrix, calculate the absolute difference between the sums of its diagonals.

For example, the square matrix arr is shown below:

1 2 3
4 5 6
9 8 9  
The left-to-right diagonal =1+5+9=15 . The right to left diagonal =3+5+9=17 . Their absolute difference is 15-17=2.
*/


function diagonalDifference(arr) {
    let sum1 = 0;
    let sum2 = 0;
    for (let i = 0; i < arr.length; i++) {
        sum1 += arr[i][i];
        sum2 += arr[arr.length - 1 - i][i]
    }
    return Math.abs(sum1 - sum2)
}