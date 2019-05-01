var number = 1

function sayStuff() {
    console.log(number)
    number++
}

setInterval(sayStuff, 2000) //built in function with callback function inside, function calling another function