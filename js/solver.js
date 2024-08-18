let rings = document.querySelectorAll('.ring');
let display = document.getElementById('moves');
let count = 0;

function TOH(n, A, B, C) {
    if (n > 0) {
        TOH(n - 1, A, C, B);
        display.innerHTML += `${++count}. move ${n} from ${A} to ${C} <br>`;
        // console.log(`${++count}. move ${n} from ${A} to ${C}`)
        TOH(n - 1, B, A, C);
    }
}

document.getElementById('solve-btn').addEventListener('click', (e) => {
    TOH(n_of_rings, 'A', 'B', 'C');
    // alert()
})