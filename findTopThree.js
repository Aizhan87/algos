function findThree(arr) {
    let first = 0;
    let second = 0;
    let third = 0;
    for (let i = 0; i < arr.length; i++) {

        if (arr[i] > first) {
            third = second
            second = first
            first = arr[i]

        } else if (arr[i] > second) {
            third = second
            second = arr[i]


        } else if (arr[i] > third) {
            third = arr[i]

        }
    }
    return [first, second, third]
}


findThree([1, 6, 3, 33, 7, 56, 12, 15, 22, 100])

 // prints: [ 100, 56, 33 ]