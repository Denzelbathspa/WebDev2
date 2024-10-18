
// Get the picture groups from the original container
const picGRP1 = document.getElementById('picGRP1');
const picGRP2 = document.getElementById('picGRP2');
const picGRP3 = document.getElementById('picGRP3');
const dupe_picGRP1 = document.getElementById('picGRP4');
const dupe_picGRP2 = document.getElementById('picGRP5');
const dupe_picGRP3 = document.getElementById('picGRP6');


// Set positions for animation
let speed = 0.05
let position1 = 0;
let position2 = 0;
let position3 = 0;
let dupe_position1 = 100;
let dupe_position2 = -100;
let dupe_position3 = 100;

function animate() {
    const groupWidth = 100; // Each group width in vw

    // Move positions
    position1 -= speed;
    position2 += speed;
    position3 -= speed;
    dupe_position1 -= speed;
    dupe_position2 += speed;
    dupe_position3 -= speed;

    if (position1 <= -groupWidth) {
        position1 = 100;
    }
    if (position2 >= groupWidth) {
        position2 = -100;
    }
    if (position3 <= -groupWidth) {
        position3 = 100;
    }
    if (dupe_position1 <= -groupWidth) {
        dupe_position1 = 100;
    }
    if (dupe_position2 >= groupWidth) {
        dupe_position2 = -100;
    }
    if (dupe_position3 <= -groupWidth) {
        dupe_position3 = 100;
    }

    picGRP1.style.transform = `translateX(${position1}vw)`;
    picGRP2.style.transform = `translateX(${position2}vw)`;
    picGRP3.style.transform = `translateX(${position3}vw)`;
    dupe_picGRP1.style.transform = `translateX(${dupe_position1}vw) translateY(0)`;
    dupe_picGRP2.style.transform = `translateX(${dupe_position2}vw) translateY(0)`;
    dupe_picGRP3.style.transform = `translateX(${dupe_position3}vw) translateY(0)`;

    requestAnimationFrame(animate);
}

animate();
