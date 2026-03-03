
const box1 = document.getElementById("box1");
const box2 = document.getElementById("box2");
const ex2 = document.getElementById("ex2");

document.getElementById("ex1").addEventListener("click",function(e) {
    e.preventDefault();
    box1.style.display = "block";
    box2.style.display = "none";
});

ex2.addEventListener("click", function(e) {
    e.preventDefault();
    box1.style.display = "none";
    box2.style.display = "block";
    checkTime();
});

//slider
const slider = document.getElementById("minutesSlider");
const message = document.getElementById("p-box1-message");
const minutesOutput = document.getElementById("minutesOutput");


slider.addEventListener("input",function() {
    const mins = Number(slider.value);

    minutesOutput.textContent = mins + " minutes";

    if(mins > 45) {
        message.textContent = "Get ready for the day";
    }else if (mins >= 30){
        message.textContent = "Eat breakfast";
    }else if(mins > 15) {
        message.textContent = "Catch the bus";
    }else if(mins > 5) {
        message.textContent = "Bus was late hurry to class";
    }else {
        message.textContent = "Class is starting";
    }
});

//countdown

function checkTime() {

    const current = new Date();

    //class start time
    const time = new Date();
    time.setHours(8, 30, 0, 0);

    const difference = time - current;
    const minutes = Math.floor(difference / 60000);
    const countdownE1 = document.getElementById("countdownMessage");

    if(minutes > 15) {
        countdownE1.textContent = "Make sure your assignments are done! " + minutes + " minutes left till class";
    }else if(minutes > 10) {
        countdownE1.textContent = "You have " + minutes + " minutes left. Get a snack before class.";
    }else if(minutes > 5) {
        countdownE1.textContent = "Only " + minutes + " minutes left. Get your shoes on and head out. ";
    }else if(minutes >= 0) {
        countdownE1.textContent = minutes + " minutes left you better hurry up!";
    }else if(minutes >= -5) {
        countdownE1.textContent = "Class started " + Math.abs(minutes) + " minutes ago. You are LATE!";
    }else if(minutes >= -15) {
        countdownE1.textContent = "You are " + Math.abs(minutes) + " minutes late";
    }else {
        countdownE1.textContent = "You missed class :(";
    }
}

//menu toggle for small screens
const menuToggle = document.getElementById("menu-toggle");
const selection = document.getElementById("selection");
const arrow = document.getElementById("arrow");

menuToggle.addEventListener("click", function() {
    if(selection.style.display =="none" || selection.style.display == "") {
        selection.style.display = "block";
        arrow.innerHTML = "&#9650";
    }else {
        selection.style.display = "none";
        arrow.innerHTML = "&#9660";
    }
});
