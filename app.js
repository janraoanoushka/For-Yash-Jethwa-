const yesBtn = document.getElementById('yesBtn');
const noBtn = document.getElementById('noBtn');
const questionText = document.getElementById('questionText');
const gifDisplay = document.getElementById('gifDisplay');

let noClickCount = 0;

function flyAway() {
    const x = Math.random() * (window.innerWidth - noBtn.offsetWidth - 60) + 30;
    const y = Math.random() * (window.innerHeight - noBtn.offsetHeight - 60) + 30;
    
    noBtn.style.left = `${x}px`;
    noBtn.style.top = `${y}px`;
}

noBtn.addEventListener('mouseover', flyAway);
noBtn.addEventListener('touchstart', (e) => {
    e.preventDefault(); 
    flyAway();
});

// If he manages to click "No" (switches to the sad image)
noBtn.addEventListener('click', () => {
    noClickCount++;
    
    gifDisplay.src = "image__em5_W.png"; 
    
    if (noClickCount === 1) {
        questionText.innerHTML = "Think again... 🥺👉👈";
    } else if (noClickCount >= 2) {
        questionText.innerHTML = "Pleaseee think again!!! 😭😭😭💔";
    }
});

// When he clicks Yes! (switches to the happy hugging image)
yesBtn.addEventListener('click', () => {
    questionText.innerHTML = "Yayyy! I love you too!! 💖🥰✨";
    
    gifDisplay.src = "image_122-Zf.png"; 
    
    noBtn.style.display = 'none';
});
