/*
You are given an array of n integers, , ar = [ar[0], ar[1],.., ar[n - 1]] and a positive integer, k.Find and print the number of(i, j) pairs where i < j and  ar[i] + ar[j]  is divisible by k.

For example, ar=[1,2,3,4,5,6] and k=5. Our three pairs meeting the criteria are [1,4], [2,3] and [4,6].

Function Description

Complete the divisibleSumPairs function in the editor below. It should return the integer count of pairs meeting the criteria.

divisibleSumPairs has the following parameter(s):

n: the integer length of array ar
ar: an array of integers
k: the integer to divide the pair sum by
*/


function divisibleSumPairs(n, k, ar) {
    let score = 0;
    for (let i = 0; i < ar.length; i++) {
        for (let j = i + 1; j < ar.length; j++) {
            if ((ar[i] + ar[j]) % k === 0) {
                score++;
            }
        }
    }
    return score
}