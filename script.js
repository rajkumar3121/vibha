/* =========================
   BIRTHDAY WEBSITE
   Vibha ❤️
========================= */


/* =========================
   TYPING LETTER
========================= */

const letter = `
Happy Birthday, Vibha ❤️

Pata hai, life mein bahut saare log milte hain,
lekin kuch log bina kisi warning ke
life ka important part ban jaate hain.

Tum bhi unhi logon mein se ho.

Tumhari smile,
tumhari बातें,
tumhara gussa,
tumhari pagalpan wali harkatein...

sab kuch somehow special hai.

Main perfect nahi hoon,
aur hamari story bhi perfect nahi hai.

Kabhi hum haste hain,
kabhi ladte hain,
kabhi ek dusre ko irritate karte hain...

but at the end,
you are still one of my favorite people.

So today,
I just want to say...

Happy Birthday, Meri Kutti ❤️

Hamesha khush rehna,
hamesha smile karna,
aur haan...

mujhe zyada pareshan mat karna. 😂❤️
`;

const letterElement = document.getElementById("letterText");

let letterIndex = 0;

function typeLetter() {

    if (letterIndex < letter.length) {

        letterElement.innerHTML +=
            letter.charAt(letterIndex)
                .replace(/\n/g, "<br>");

        letterIndex++;

        setTimeout(typeLetter, 25);

    }

}


/* =========================
   SURPRISE BUTTON
========================= */

const surpriseBtn =
    document.getElementById("surpriseBtn");

surpriseBtn.addEventListener("click", () => {

    createConfetti(100);

    document.querySelector(".section")
        .scrollIntoView({
            behavior: "smooth"
        });

});


/* =========================
   MUSIC
========================= */

const music =
    document.getElementById("music");

const musicBtn =
    document.getElementById("musicBtn");

let musicPlaying = false;


musicBtn.addEventListener("click", async () => {

    try {

        if (!musicPlaying) {

            await music.play();

            musicPlaying = true;

            musicBtn.innerHTML = "🔊";

        } else {

            music.pause();

            musicPlaying = false;

            musicBtn.innerHTML = "🎵";

        }

    } catch (error) {

        alert(
            "Music file nahi mila ❤️\n\n" +
            "audio folder mein birthday.mp3 add karo."
        );

    }

});


/* =========================
   FLOATING HEARTS
========================= */

const heartsContainer =
    document.getElementById("hearts");


function createHeart() {

    const heart =
        document.createElement("div");

    heart.className =
        "floating-heart";

    const hearts = [
        "❤️",
        "💗",
        "💖",
        "💕",
        "💓"
    ];

    heart.innerHTML =
        hearts[
            Math.floor(
                Math.random() * hearts.length
            )
        ];

    heart.style.left =
        Math.random() * 100 + "%";

    heart.style.fontSize =
        (12 + Math.random() * 20) + "px";

    heart.style.animationDuration =
        (6 + Math.random() * 8) + "s";

    heartsContainer.appendChild(heart);


    setTimeout(() => {

        heart.remove();

    }, 15000);

}


setInterval(createHeart, 900);


/* =========================
   SCROLL REVEAL
========================= */

const revealElements =
    document.querySelectorAll(".reveal");


const observer =
    new IntersectionObserver(
        (entries) => {

            entries.forEach(entry => {

                if (entry.isIntersecting) {

                    entry.target.classList.add(
                        "visible"
                    );

                }

            });

        },
        {
            threshold: 0.12
        }
    );


revealElements.forEach(element => {

    observer.observe(element);

});


/* =========================
   CAKE
========================= */

const blowBtn =
    document.getElementById("blowBtn");

const wishMessage =
    document.getElementById("wishMessage");


blowBtn.addEventListener("click", () => {

    const flames =
        document.querySelectorAll(".flame");

    flames.forEach(flame => {

        flame.style.display = "none";

    });


    wishMessage.innerHTML =
        `
        Wish made! ✨
        <br>
        Ab tumhari saari wishes
        sach hone ki responsibility universe ki hai. ❤️
        `;


    createConfetti(150);

    blowBtn.innerHTML =
        "Wish Made ❤️";

});


/* =========================
   LOVE SURPRISE
========================= */

const loveBtn =
    document.getElementById("loveBtn");

const hiddenMessage =
    document.getElementById("hiddenMessage");


loveBtn.addEventListener("click", () => {

    hiddenMessage.classList.toggle("show");

    createConfetti(120);

    loveBtn.innerHTML =
        hiddenMessage.classList.contains("show")
            ? "💖"
            : "❤️";

});


/* =========================
   CONFETTI
========================= */

const confettiContainer =
    document.getElementById("confetti");


function createConfetti(amount = 100) {

    for (let i = 0; i < amount; i++) {

        const piece =
            document.createElement("div");

        piece.className =
            "confetti-piece";

        piece.style.left =
            Math.random() * 100 + "vw";

        piece.style.animationDuration =
            (2 + Math.random() * 3) + "s";

        piece.style.animationDelay =
            Math.random() * 1 + "s";

        piece.style.transform =
            `rotate(${Math.random() * 360}deg)`;

        const shapes = [
            "❤️",
            "💗",
            "✨",
            "💕",
            "★"
        ];

        piece.innerHTML =
            shapes[
                Math.floor(
                    Math.random() * shapes.length
                )
            ];

        piece.style.fontSize =
            (10 + Math.random() * 15) + "px";

        piece.style.width = "auto";
        piece.style.height = "auto";

        confettiContainer.appendChild(piece);


        setTimeout(() => {

            piece.remove();

        }, 6000);

    }

}


/* =========================
   START TYPING
========================= */

window.addEventListener("load", () => {

    setTimeout(() => {

        typeLetter();

    }, 1000);

});