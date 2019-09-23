// Given an array of integers, calculate the fractions of its elements that are positive, negative, and are zeros. Print the decimal value of each fraction on a new line.

// 0.400000
// 0.400000
// 0.200000


function plusMinus(arr) {
    let positiveNum = 0;
    let negativeNum = 0;
    let zeroNum = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] < 0) {
            negativeNum++
        } else if (arr[i] > 0) {
            positiveNum++
        } else {
            zeroNum++
        }
    }

    console.log(positiveNum / arr.length)
    console.log(negativeNum / arr.length)
    console.log(zeroNum / arr.length)
}

plusMinus([1, 1, 0, -1, -1])

// outputs: 0.4, 0.4, 0.2