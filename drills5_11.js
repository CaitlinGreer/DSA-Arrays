// 5. URLify a string
function urlify(url) {
    return url.split(' ').join('%20')
}
console.log('URLify: ', urlify('tauhida parveen'))
console.log('URLify: ', urlify('www.thinkful.com / tauh ida parv een'))

// O(n) Linear Complexity

// 6. Filtering an array
// Write an algorithm to remove all numbers less than 5 from array
function filter(arr) {
    let output = []
    for (let i = 0; i < arr.length; i++) {
        if(arr[i] >= 5) {
            output.push(arr[i])
        }
    }
    return output 
}
console.log('Filtering array: ', filter([1,2,3,4,5,6,7,8,9,10]))

// O(n) Linear Complexity

// 7. Write an algorithm to find largest sum in a continuous sequence

function maxSum(arr) {
    let sum = 0
    let maxSum = 0

    for (let i = 0; i < arr.length; i++) {
        sum = 0
        sum = arr[i]
        for(let j = 0; j < arr.length; j++){
            sum += arr[j]
            if(sum > maxSum) {
                maxSum = sum
            }
        }
    }
    return maxSum
}

console.log('Max Sum: ', maxSum([4,6,-3,5,-2,1]))