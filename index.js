// Function to calculate the area of a rectangle
function calculateArea(length, width) {
    return length * width;
}

// Function to demonstrate scope
let globalVariable = "I'm a global variable";

function scopeDemo() {
    let localVariable = "I'm a local variable";
    console.log(globalVariable); // Accessible
    console.log(localVariable); // Accessible
}

scopeDemo();
// console.log(localVariable); // Uncaught ReferenceError: localVariable is not defined

// Function to toggle the modal visibility
function toggleModal() {
    const modal = document.getElementById('modal');
    modal.classList.toggle('hidden');
}

// Function to animate the box
function animateBox() {
    const box = document.getElementById('animatedBox');
    box.classList.toggle('animate');
}

// Event listeners
document.getElementById('calculateAreaBtn').addEventListener('click', () => {
    const length = parseFloat(document.getElementById('length').value);
    const width = parseFloat(document.getElementById('width').value);
    const area = calculateArea(length, width);
    document.getElementById('areaResult').innerText = `Area: ${area}`;
});

document.getElementById('toggleModalBtn').addEventListener('click', toggleModal);
document.getElementById('closeModalBtn').addEventListener('click', toggleModal);
document.getElementById('animateBtn').addEventListener('click', animateBox);