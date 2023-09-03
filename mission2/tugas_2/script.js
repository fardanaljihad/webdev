const dog = document.getElementById('dog');
const cactus = document.getElementById('cactus');

function jump() {
    if( dog.classList != 'jump' ) {
        dog.classList.add('jump');

        setTimeout(function() {
            dog.classList.remove('jump');
        }, 300);
    }
}

let isAlive = setInterval(function() {
    // get current dog Y position
    let dogTop = parseInt(window.getComputedStyle(dog).getPropertyValue('top'));

    // get current cactus X position
    let cactusLeft = parseInt(window.getComputedStyle(cactus).getPropertyValue('left'));

    // detect collision
    if( cactusLeft < 50 && cactusLeft > 0 && dogTop >= 140 ) {
        // collision

        alert('Game Over!');
    }
}, 10);

document.addEventListener("keydown", function(event) {
    jump();    
});