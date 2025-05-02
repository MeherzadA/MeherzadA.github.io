const changingText = document.getElementById("changingText");
const roles = ["Developer", "Programmer", "Creator", "Innovator"];
let index = 1;

function changeText() {
    changingText.style.opacity = 0;

    
    setTimeout(() => {
        changingText.textContent = roles[index];
        changingText.style.opacity = 1;
        index = (index + 1) % roles.length;
    }, 300); 
}

setInterval(changeText, 2500);
