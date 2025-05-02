const words = [">_", "./", "cd", "echo", "git push"];
let wordIndex = 0;
let charIndex = 0;
let typing = true;
const delay = 120;
const target = document.getElementById("typewriter");

function type() {
    if (typing) {
        if (charIndex < words[wordIndex].length) {
            target.textContent += words[wordIndex][charIndex];
            charIndex++;
        setTimeout(type, delay);
        } else {
            typing = false;
            setTimeout(type, 1500);
        }
    } else {
        if (charIndex > 0) {
            target.textContent = target.textContent.slice(0, -1);
            charIndex--;
            setTimeout(type, delay / 2);
        } else {
            typing = true;
            wordIndex = (wordIndex + 1) % words.length;
            setTimeout(type, 300);
        }
    }
}

document.addEventListener("DOMContentLoaded", type);

