const geometryBox = document.getElementById("geometryBox");
const triangle = document.getElementById("triangle");

geometryBox.addEventListener("click", () => {
    triangle.style.display = "block";
});




const dateInput = document.getElementById("dateInput");
const dateResult = document.getElementById("dateResult");

dateInput.addEventListener("change", () => {
    const raw = dateInput.value;
    const [year, month, day] = raw.split("-");
    const formatted = `${month}/${day}/${year}`;
    dateResult.innerHTML = "You picked the date: <b>" + formatted + "</b>";
});

const sun = document.getElementById("sun");

sun.addEventListener("click", () => {
    sun.src = "images/sun2.png";
    sun.style.borderTop = "5px solid red";
    sun.style.borderRight = "5px solid blue";
    sun.style.borderBottom = "5px solid green";
    sun.style.borderLeft = "5px solid purple";
});