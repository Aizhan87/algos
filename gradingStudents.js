// HackerLand University has the following grading policy:

// Every student receives a grade in the inclusive range from 0 to 100.
// Any grade less than 40 is a failing grade.
// Sam is a professor at the university and likes to round each student's grade according to these rules:

// If the difference between the grade and the next multiple of 5 is less than 3, round grade up to the next multiple of 5.
// If the value of grade is less than 38, no rounding occurs as the result will still be a failing grade.
// For example, grade=84 will be rounded to 85 but grade=29 will not be rounded because the rounding would result in a number that is less than 40.

// Given the initial value of grade for each of Sam's n students, write code to automate the rounding process.

// Sample Input 0  

// 4
// 73
// 67
// 38
// 33

// Sample Output 0

// 75
// 67
// 40
// 33



let roundedNum = [];
for (let i = 0; i < grades.length; i++) {
    if (grades[i] < 38) {
        roundedNum.push(grades[i])
    } else if (grades[i] % 5 === 4) {
        roundedNum.push(grades[i] + 1)
    } else if (grades[i] % 5 === 3) {
        roundedNum.push(grades[i] + 2)
    } else {
        roundedNum.push(grades[i])
    }
}
return roundedNum