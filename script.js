```javascript
// Birthday Surprise Button
function openSurprise() {

    const surprise = document.getElementById("surprise");

    surprise.classList.remove("hidden");

    surprise.scrollIntoView({
        behavior: "smooth"
    });

    createHearts();
    createConfetti();
}


// Create floating hearts
function createHearts() {

    for (let i = 0; i < 25; i++) {

        const heart = document.createElement("div");

        heart.innerHTML = "❤️";

        heart.style.position = "fixed";
        heart.style.left = Math.random() * 100 + "vw";
        heart.style.top = "100vh";
        heart.style.fontSize = (15 + Math.random() * 25) + "px";
        heart.style.zIndex = "100";
        heart.style.pointerEvents = "none";

        document.body.appendChild(heart);

        heart.animate(
            [
                {
                    transform: "translateY(0)",
                    opacity: 1
                },
                {
                    transform: "translateY(-110vh)",
                    opacity: 0
                }
            ],
            {
                duration: 3000 + Math.random() * 3000,
                easing: "ease-out"
            }
        );

        setTimeout(() => {
            heart.remove();
        }, 6000);
    }
}


// Create confetti
function createConfetti() {

    for (let i = 0; i < 80; i++) {

        const confetti = document.createElement("div");

        confetti.innerHTML = "✨";

        confetti.style.position = "fixed";
        confetti.style.left = Math.random() * 100 + "vw";
        confetti.style.top = Math.random() * 100 + "vh";
        confetti.style.fontSize = (10 + Math.random() * 20) + "px";
        confetti.style.zIndex = "100";
        confetti.style.pointerEvents = "none";

        document.body.appendChild(confetti);

        confetti.animate(
            [
                {
                    transform: "translateY(-30px) rotate(0deg)",
                    opacity: 1
                },
                {
                    transform: "translateY(100px) rotate(360deg)",
                    opacity: 0
                }
            ],
            {
                duration: 1500 + Math.random() * 2000,
                easing: "ease-out"
            }
        );

        setTimeout(() => {
            confetti.remove();
        }, 4000);
    }
}


// Falling flower petals
function createPetal() {

    const petal = document.createElement("div");

    petal.classList.add("petal");

    const flowers = ["🌸", "🌷", "🌹", "💮"];

    petal.innerHTML =
        flowers[Math.floor(Math.random() * flowers.length)];

    petal.style.left = Math.random() * 100 + "vw";

    petal.style.fontSize =
        (12 + Math.random() * 18) + "px";

    petal.style.animationDuration =
        (4 + Math.random() * 5) + "s";

    document.getElementById("petals").appendChild(petal);

    setTimeout(() => {
        petal.remove();
    }, 9000);
}


// Keep creating petals
setInterval(createPetal, 500);
```
