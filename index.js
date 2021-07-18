
// Listen to click event on all the buttons
for (var i = 0; i < document.querySelectorAll(".drum").length; i++){
    document.querySelectorAll(".drum")[i].addEventListener("click", function () {
        
        var button = this.innerHTML;

        makeSound(button);
        buttonFlash(button);

    });
}

// Listen to Keyboard press

document.addEventListener("keydown", function (event) {

    makeSound(event.key);
    buttonFlash(event.key);

});

//Function to make sound
function makeSound(key) {
    switch (key) {
        case "w":
            var tom1 = new Audio("sounds/tom-1.mp3");
            tom1.play();
            break;
        
        case "a":
            var tom2 = new Audio("sounds/tom-2.mp3");
            tom2.play();
            break;
        
        case "s":
            var tom3 = new Audio("sounds/tom-3.mp3");
            tom3.play();
            break;

        case "d":
            var tom4 = new Audio("sounds/tom-4.mp3");
            tom4.play();
            break;
        
        case "j":
            var snare = new Audio("sounds/snare.mp3");
            snare.play();
            break;

        case "k":
            var crash = new Audio("sounds/crash.mp3");
            crash.play();
            break;

        case "l":
            var kickBass = new Audio("sounds/kick.mp3");
            kickBass.play();
            break;
        
        default:
            break;
    }
}

// Function to animate button cliked or pressed

function buttonFlash (currentKey) {

    var activeButton = document.querySelector("." + currentKey);

    activeButton.classList.add("pressed");

    setTimeout (function () {
        activeButton.classList.remove("pressed");
    }, 5000);
}
