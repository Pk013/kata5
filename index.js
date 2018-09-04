const output = document.getElementById("output")
const string = "You are a peasent!"
const string2 ="you are a peasent!"
const array1 = [5, 2, 3, 4]
let a = [3, 1, 2, 2, 1];

const reversal2 = string.split("").reverse().join("")
let kata1 = document.createElement("p")
output.appendChild(kata1)
kata1.appendChild(document.createTextNode(reversal2))

const reversal = string2.split(" ").reverse().join(" ")
let kata2 = document.createElement("p")
output.appendChild(kata2)
kata2.appendChild(document.createTextNode(reversal))

let kata3 = document.createElement("p")
output.appendChild(kata3)
kata3.appendChild(document.createTextNode(Math.min(...array1)))
console.log(...array1)

let kata4 = document.createElement("p")
output.appendChild(kata4)
kata4.appendChild(document.createTextNode(Math.max(...array1)))

//kata 5
console.log(12 % 5)

