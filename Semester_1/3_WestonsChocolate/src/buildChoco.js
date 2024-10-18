// Function to set the size of the box
function setBoxSize() 
{
    const box = document.getElementById('box');
    const size = document.getElementById('box-size').value;

    box.innerHTML = ''; // Clear the box first

    let gridColumns, gridRows;

    // Determine the grid dimensions based on the size selected
    if (size == 4) {
        gridColumns = 2;
        gridRows = 2; // 2x2 grid
    } else if (size == 6) {
        gridColumns = 3;
        gridRows = 2; // 3x2 grid
    } else if (size == 9) {
        gridColumns = 3;
        gridRows = 3; // 3x3 grid
    }

    // Adjust the grid layout based on the size of the chocolates
    const chocolateElement = document.querySelector('.chocolate');
    const chocolateSize = chocolateElement ? chocolateElement.offsetWidth + 20 : 70; // Add some padding to the chocolate size
    const boxWidth = gridColumns * chocolateSize;
    const boxHeight = gridRows * chocolateSize;

    // Set grid dimensions
    box.style.gridTemplateColumns = `repeat(${gridColumns}, 1fr)`;
    box.style.gridTemplateRows = `repeat(${gridRows}, 1fr)`;

    // Dynamically set the box size based on the chocolate size
    box.style.width = `${boxWidth}px`;
    box.style.height = `${boxHeight}px`;

    // Create grid cells for the box
    for (let i = 0; i < size; i++) {
        const cell = document.createElement('div');
        cell.setAttribute('ondrop', 'drop(event)');
        cell.setAttribute('ondragover', 'allowDrop(event)');
        box.appendChild(cell);
    }
}

// Allow drop event
function allowDrop(ev) 
{
    ev.preventDefault();
}

// Drag event
function drag(ev) 
{
    ev.dataTransfer.setData("text", ev.target.id);
}

// Drop event
function drop(ev) 
{
    ev.preventDefault();
    const data = ev.dataTransfer.getData("text");
    const originalChocolate = document.getElementById(data);

    // Clone the chocolate being dragged
    const chocolateClone = originalChocolate.cloneNode(true);
    chocolateClone.id = `clone_${Date.now()}`; // Ensure the clone has a unique id

    // Append the cloned chocolate to the target if the target cell is empty
    if (!ev.target.hasChildNodes()) {
    ev.target.appendChild(chocolateClone);
    }
}

function purchaseItems() 
{
    const purchaseButton = document.getElementById('purchase-button');
    
    // Change button to 'Purchased'
    purchaseButton.textContent = 'Purchased';
    purchaseButton.classList.add('purchased');

}


// initialization
window.onload = setBoxSize;
  