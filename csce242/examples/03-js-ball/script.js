const bounceBall = () => {
    let ballElement = document.getElementById("ball");
    ball.classList.add("bounce");
};


window.onload = () => {
    document.getElementById("bounce-button").onclick = bounceBall;
}





