/*a count variable is declared to perform operations.*/
let count = 0;


/*a function is assigned for each button with the respective action to do*/

document.getElementById('increaseBtn').onclick = function () {
    count += 1
    document.getElementById('counterLabel').innerHTML = count
}

document.getElementById('resetBtn').onclick = function () {
    count = 0
    document.getElementById('counterLabel').innerHTML = count
}

document.getElementById('decreaseBtn').onclick = function () {
    count -= 1
    document.getElementById('counterLabel').innerHTML = count
}