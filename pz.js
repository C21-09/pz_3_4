function modifyArray(a) {
	a.unshift("start")
	a.pop()
	a.splice(2, 1, "modified")
	return a
}

function arrayOperations(a) {
    a.push("end")
    a.shift()
    a.splice(3, 0, "middle")
    return a
}

function checkInteger(a) {
    if(Number.isInteger(a)) {
        console.log("Число ціле")
    } else {
        console.log("Число не ціле")
    }
}

function calculateCircleArea(r) {
    return (Math.PI * Math.pow(r,2)).toFixed(2)
}

function displayCurrentDate() {
    let newDate = new Date()
    let day = newDate.getDate()
    let month = newDate.getMonth()
    let year = newDate.getFullYear()
    let hours = newDate.getHours()
    let minutes = newDate.getMinutes()
    let fullDate = new String(day + "." + month + "." + year + " " + hours + ":" + minutes)
    console.log(fullDate)
}

let myArray1 = [1, 2, 3, 4]
let myArray2 = [5, 6, 7, 8]

console.log(modifyArray(myArray1))
console.log(arrayOperations(myArray2))
checkInteger(13.5)
checkInteger(13)
console.log(calculateCircleArea(5))
displayCurrentDate()


