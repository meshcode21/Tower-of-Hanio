// Function to prompt the user for a number less than or equal to 7
function getNumberInput() {
    let userInput;

    do {
        userInput = prompt("Please enter a number (number must between 0 to 8):");

        // Check if the input is a number, not empty, and less than or equal to 7
        if (userInput === null) {
            // alert("You cancelled the prompt.");
            return null; // User cancelled the prompt
        } else if (isNaN(userInput) || userInput.trim() === "") {
            alert("That's not a valid number. Please try again.");
        } else if (Number(userInput) > 7 || Number(userInput) < 1) {
            alert("The number must between 0 to 8. Please try again.");
        } else {
            return Number(userInput); // Return the valid number
        }
    } while (true);
}

// Call the function and store the number
let n = getNumberInput();

for (i = 1; i <= n; i++) {
    let ring = document.createElement('div');
    ring.classList.add('ring');
    ring.style = `top: calc(100% - ${(i-1)*10}px);
                left: calc(0%);
                width: calc(20% - ${i*10}px);
                transform: translate(${i*5}px, -100%);
                background-color: ${color(i)};`;
    ring_content.appendChild(ring);
}

function color(num) {
    switch (num) {
        case 1:
            return 'red';
        case 2:
            return 'orange';
        case 3:
            return 'green';
        case 4:
            return 'yellow';
        case 5:
            return 'indigo';
        case 6:
            return 'blue';
        case 7:
            return 'violet';
    }
}