let rings = new Array();
let temp = document.querySelectorAll('.ring');
temp.forEach((value, index) => {
    rings[temp.length - 1 - index] = value;
});
// console.log(rings)
let display = document.getElementById('moves');
let count = 0,
    timeout = 0;

let moves_div = document.getElementById("moves");
// moves_div
// algorithm to solve the problem...
function TOH(n, A, B, C) {
    timeout = timeout + 50;
    if (n > 0) {
        TOH(n - 1, A, C, B);
        setTimeout(() => {
            display.innerHTML += `${++count}. move ${n} from ${A.name} to ${C.name} <br>`;
            move(rings[n - 1], A, C);
            moves_div.scrollTop = moves_div.scrollHeight
        }, timeout);
        TOH(n - 1, B, A, C);
    }
}
console.log(moves_div)
document.getElementById('solve-btn').addEventListener('click', (e) => {
    TOH(n_of_rings, tower[0], tower[1], tower[2]);
    e.target.disabled = true;
})

function move(ring, source, destination) {
    source.count--;
    destination.count++;

    endX = ring.offsetLeft + destination.rect.left - source.rect.left;
    endY = destination.rect.bottom - ring.offsetHeight * destination.count;
    moveElement(ring, endX, endY, source.rect.top - 10);
}


// animation section...

function moveElement(element, endX, endY, peakY) {
    const startX = element.offsetLeft; // Start point X-coordinate
    const startY = element.offsetTop; // Start point Y-coordinate
    // const peakY = source.top - 50; // Y-coordinate of the peak for vertical upward motion
    const controlX = (startX + endX) / 2; // Control point X-coordinate (peak of the arc)
    const controlY = peakY - 80; // Control point Y-coordinate (peak of the arc)
    // const endX = 300; // End point X-coordinate
    // const endY = 300; // End point Y-coordinate (final downward position)

    // const element = ele;
    let t = 0; // Parameter t for interpolation


    const fn = () => {
        let x, y;
        if (t < 0.3) {
            // First phase: Vertical upward motion
            const progress = t / 0.3; // Normalize t for this phase
            x = startX;
            y = startY - progress * (startY - peakY);
        } else if (t < 0.7) {
            // Second phase: Move along the curved path
            const progress = (t - 0.3) / 0.4; // Normalize t for this phase
            x = (1 - progress) * (1 - progress) * startX + 2 * (1 - progress) * progress * controlX + progress * progress * endX;
            y = (1 - progress) * (1 - progress) * peakY + 2 * (1 - progress) * progress * controlY + progress * progress * peakY;
        } else {
            // Third phase: Vertical downward motion
            const progress = (t - 0.7) / 0.3; // Normalize t for this phase
            x = endX;
            y = peakY + progress * (endY - peakY);
        }

        // Update the position of the element
        element.style.left = x + 'px';
        element.style.top = y + 'px';

        // Increment t to move the element along the path
        t += 0.1; // Increase this value to speed up the animation

        if (t <= 1) {
            requestAnimationFrame(fn);
        }
    }
    fn();
}