/*
Alice and Bob each created one problem for HackerRank. A reviewer rates the two challenges, awarding points on a scale from 1 to 100 for three categories: problem clarity, originality, and difficulty.

We define the rating for Alice's challenge to be the triplet a=(a[0],a[1],a[2]), and the rating for Bob's challenge to be the triplet b=(b[0],b[1],b[2]).

Your task is to find their comparison points by comparing a[0] with b[0], a[1] with b[1], and a[2] with b[2].

If a[i]>b[i], then Alice is awarded  point.
If a[i]<b[i], then Bob is awarded  point.
If a[i]=b[i], then neither person receives a point.
*/

function compareTriplets(a, b) {
    let score = [0, 0]

    for (let i = 0; i < a.length; i++) {
        if (a[i] > b[i]) {
            score[0]++
        } else if (a[i] < b[i]) {
            score[1]++
        } else {
            ''
        }
    }
    return score
}

// or by using Turnary Operator

function compareTriplets(a, b) {
    let score = [0, 0]

    for (let i = 0; i < a.length; i++)
        a[i] > b[i] ? score[0]++ : a[i] < b[i] ? score[1]++ : ""
    return score
}