const sentence = "you gots a problem with me brahhhh"

const array1 = ["12", "18", "29", "53", "46", "60"]

const array2 = ["1", "3", "5", "3", "7", "3", "1", "1", "5"]

const values = { a: 1, b: 7, c: 3, d: 14 };


//kata 1



function reverseString() {
    var reverse = sentence.toString().split("").reverse("").join("")
    return reverse
}

console.log(reverseString())

console.assert(("you gots a problem with me brahhhh", "you gots a problem with me brahhhh".toString().split("").reverse("").join("")) === "hhhharb em htiw a stog uoy")
console.assert(("", "".toString().split("").reverse("").join("")) === " ")


//kata 2

var backwards = sentence.split(" ").reverse("").join(" ")
console.log(backwards)

console.assert(("you gots a problem with me brahhhh", "you gots a problem with me brahhhh".split(" ").reverse("").join(" ")) === "hhhharb em htiw a stog uoy")
console.assert(("", "".toString().split("").reverse("").join("")) === " ")


//kata3

var min = Math.min(...array1)
console.log(min)

console.assert((min, "7") === "7")
console.assert((min, "7") === "0")




//kata4

var max = Math.max(...array1)
console.log(max)

console.assert((max, "50") === "50")
console.assert((max, "50") === "0")

//kata5

let y = 6
let x = 2
var quotient = Math.floor(y / x)


console.log(quotient)
console.assert((quotient, "3") === "3")
console.assert((quotient, "3") === "0")


//kata6


let array2unique = [...new Set(array2)]

console.log(array2unique)
console.assert((array2unique, "1, 3, 5, 7") === "1, 3, 5, 7")
console.assert((array2unique, "1, 3, 5, 7") === "0")

//kata7

function getCharCount(charCount, char) {
    charCount[char] ? charCount[char] += 1 : charCount[char] = 1;
    return charCount;
}

let newArray = array2.reduce(getCharCount, [])

for (let i = 0; i < newArray.length; i++) {

    if (newArray[array2unique[i]] > 0) {
        const answer = array2unique[i] + "(" + newArray[array2unique[i]] + ")" + " "
        console.log(answer)
    }

}

console.assert(("answer", "1(3) 3(3) 5(2) 7(1)") === "1(3) 3(3) 5(2) 7(1)")
console.assert(("answer", "1(3) 3(3) 5(2) 7(1)") === "0")


//kata8




function addedNumbers(a, b, c, d) {
    return values.a + values.b + values.c - values.d;
}


console.log(addedNumbers())
console.assert(addedNumbers(addedNumbers, values) === -3);
console.assert(addedNumbers(addedNumbers, values) === 0);