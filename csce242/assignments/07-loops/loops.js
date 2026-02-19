
const water = document.querySelector(".water");
const COUNT = 20;

for (let i = 0; i < COUNT; i++) {
  const bubble = document.createElement("div");
  bubble.className = "bubble";

  
  const size = Math.floor(Math.random() * 18) + 8;
  bubble.style.width = size + "px";
  bubble.style.height = size + "px";
  bubble.style.left = (7 + Math.random() * 86) + "%";

  
  const duration = 3 + Math.random() * 5;         
  const randomProgress = Math.random() * duration; 

 
  const negativeDelay = -randomProgress;

 
  bubble.style.animation = `rise ${duration}s linear ${negativeDelay}s infinite`;

  water.appendChild(bubble);
}
