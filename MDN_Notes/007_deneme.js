a = Array(1,2,3,4,5)

b = [1,2,3,4]

c = b.splice()

c.push(999)

console.log(b)

c = a

c.push(909)

console.log(a)

a.length = 4

console.log(a)

a[1.2] = 11

console.log(a[1.2])

console.log(a.hasOwnProperty(1.2))

a = ["hkh","aswe", "ıodkjjs"]

myArray = ["uıddk", "kjıeaş", "jksşdjfp"]

let sortFn = function(a, b) {
    if (a[a.length - 1] < b[b.length - 1]) return -1;
    if (a[a.length - 1] > b[b.length - 1]) return 1;
    if (a[a.length - 1] == b[b.length - 1]) return 0;
  }
  
myArray.sort(sortFn)

console.log("myArray:",myArray)

a = [10, 20, 30]
let total = a.reduce(function(accumulator, currentValue) { return accumulator - currentValue }, 0)
console.log(total) // Prints 60