/*
Given five positive integers, find the minimum and maximum values that can be calculated by summing exactly four of the five integers. Then print the respective minimum and maximum values as a single line of two space-separated long integers.

For example, arr=[1,3,5,7,9]. Our minimum sum is 1+3+5+7=16 and our maximum sum is 3+5+7+9=24. We would print

16 24
*/


function miniMaxSum(arr) {
    let minSum = 0;
    let maxSum = 0;
    let sorted = arr.sort(function (a, b) { return a - b }
    )
    for (let i = 0; i < sorted.length - 1; i++) {
        minSum += sorted[i];
        maxSum += sorted[i + 1]

    }
    return console.log(minSum, maxSum)
}
