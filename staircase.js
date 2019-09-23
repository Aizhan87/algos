// Consider a staircase of size n=3:

//    #
//   ##
//  ###

// Observe that its base and height are both equal to n, and the image is drawn using # symbols and spaces. The last line is not preceded by any spaces.

// Write a program that prints a staircase of size n.

//     let=j         j[0]  j[1]  j[2]
//                  ___________________
//           i[0]   |__#__|_____|_____|   if (j==i) then #        
// let=i     i[1]   |__#__|__#__|_____|   if (j<i)  then " "      
//           i[2]   |__#__|__#__|___#_|    



function staircase(n) {

    for (let i = 0; i < n; i++) {
        let stair = '';
        for (let j = 0; j < n; j++) {
            if (i >= j) {
                stair += "#"
            } else {
                stair += " "
            }
        }
        console.log(stair)
    }
}

// Simple solution:
for (let line = "#"; line.length < 8; line += "#")
    console.log(line);



function staircase(n) {
    for (let i = 0; i <= n; i++) {
        console.log("#".repeat(i));
    }
}

// Reversed stairs solutation

function staircase(n) {
    let stair = "";

    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n; j++) {
            if (i + j >= n - 1) {
                stair = stair.concat("#");
            } else {
                stair = stair.concat(" ")
            }
        }
        stair = stair.concat("\n")
    }

    console.log(stair)
}