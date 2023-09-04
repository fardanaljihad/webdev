const dog = document.getElementById('dog');

function jump() {
    if( dog.classList != 'jump' ) {
        dog.classList.add('jump');

        setTimeout(function() {
            dog.classList.remove('jump');
        }, 300);
    }
}

document.addEventListener("keydown", function(event) {
    if( event.key === "ArrowUp" ) {
        jump();   
    } 
});