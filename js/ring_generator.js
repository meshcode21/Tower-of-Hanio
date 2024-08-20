// Function to prompt the user for a number less than or equal to 7
function getNumberInput() {
    let userInput;

    do {
        userInput = prompt("Please enter a number (number must from 1 to 10):");

        // Check if the input is a number, not empty, and less than or equal to 7
        if (userInput === null) {
            // alert("You cancelled the prompt.");
            return null; // User cancelled the prompt
        } else if (isNaN(userInput) || userInput.trim() === "") {
            alert("That's not a valid number. Please try again.");
        } else if (Number(userInput) > 10 || Number(userInput) < 1) {
            alert("The number must from 1 to 10. Please try again.");
        } else {
            return Number(userInput); // Return the valid number
        }
    } while (true);
}

// Call the function and store the number
let n_of_rings = getNumberInput();
document.getElementById('ring-counter').innerText = n_of_rings;

for (i = 1; i <= n_of_rings; i++) {
    let ring = document.createElement('div');
    ring.classList.add('ring');
    ring.innerText = n_of_rings - i + 1;
    ring.style = `width: ${tower[0].rect.width * (100 - i*5)/100}px;
                height: ${tower[0].rect.height*0.09}px;
                top: ${tower[0].rect.bottom - tower[0].rect.height*0.09*i}px;
                left: ${tower[0].rect.left + tower[0].rect.width * (1 - (100 - i*5)/100) / 2}px;
                background-color: ${color(i)};`;
    document.querySelector('body').appendChild(ring);
    tower[0].count++;
}

function color(num) {
    const colors = ['Magenta', 'Red', 'Orange', 'Green', 'Indigo', 'gray', 'Blue', 'Violet'];
    return colors[num % 8];
}